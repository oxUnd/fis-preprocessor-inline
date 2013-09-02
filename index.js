/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var ld, rd;

function hasInlineFile(file, ext) {
    var inlineFile = fis.file.wrap(file.realpathNoExt + '.inline.' + ext);
    if (inlineFile.exists()) {
        return inlineFile.subpath;
    }
    return false;
}

function doInline(content, file, ext, type) {
    var inline = hasInlineFile(file, ext);
    if (!inline) {
        return content;
    }
    if (type === 'css') {
        content = ld + 'style id="' + inline +'"' + rd + fis.compile.extCss('@import url("' + inline + '?__inline")') + ld + '/style' + rd + content;
    } else if (type === 'js') {
        content = ld + 'script id="' + inline +'"' + rd + fis.compile.extJs('__inline("' + inline + '")') + ld + '/script' + rd + content;
    }
    return content;
}

module.exports = function(content, file, conf) {
    if (file.rExt !== '.tpl') {
        return content;
    }

    ld = conf.left_delimiter || fis.config.get('settings.smarty.left_delimiter') || '{%';
    rd = conf.right_delimiter || fis.config.get('settings.smarty.right_delimiter') || '%}';
    var exts = fis.config.get('roadmap.ext') || {};

    exts = fis.util.merge(exts, {
        css: 'css',
        js: 'js'
    });

    fis.util.map(exts, function (ext, type) {
        content = doInline(content, file, ext, type);
    });
    
    return content;
};
