fis.config.merge({
    namespace: 'photo',
    modules: {
        spriter: 'csssprites',
        preprocessor: {
            tpl: 'inline, extlang'
        }
    },
    pack: {
        '/static/photo/aio.js': [
            "**.js"
        ]
    },
    settings: {
        smarty: {
            left_delimiter: '{%',
            right_delimiter: '%}',
        },
        spriter: {
            csssprites: {
                margin: 30
            }
        }
    }
});

fis.config.get('roadmap.path').unshift( {
    reg : /^\/widget\/(.*\.(js|css))$/i,
    isMod : true,
    useSprite: true,
    release : '/static/${namespace}/widget/$1'
});
