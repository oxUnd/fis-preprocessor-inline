/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var ld, rd;

function hasInlineFile(file, rExt) {
    var inlineFile = fis.file.wrap(file.realpathNoExt + '.inline' + rExt);
    if (inlineFile.exists()) {
        return inlineFile.subpath;
    }
    return false;
}

module.exports = function(content, file, conf) {

    var ld = conf.left_delimiter || fis.config.get('settings.smarty.left_delimiter') || '{%';
    var rd = conf.right_delimiter || fis.config.get('settings.smarty.right_delimiter') || '%}';
    if (file.rExt == '.tpl') {
        var inlineCss = hasInlineFile(file, '.css');
        if (inlineCss) {
            content = ld + 'style id="' + inlineCss +'"' + rd + fis.compile.extCss('@import url("' + inlineCss + '?__inline")') + ld + '/style' + rd + content;
        }
        var inlineJs = hasInlineFile(file, '.js');
        if (inlineJs) {
            content = ld + 'script id="' + inlineJs +'"' + rd + fis.compile.extJs('__inline("' + inlineJs + '")') + ld + '/script' + rd + content;
        }
    }
    return content;
};
