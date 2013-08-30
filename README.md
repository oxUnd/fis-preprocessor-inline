fis-preprocessor-inline
================
跟模板同名，并且有`.inline.css`和`.inline.js`后缀的文件进行自动内嵌。css内嵌到模板头部，
js统一收集到body后面。

注: 添加一个.inline.css或者.inline.js文件需要清缓存`fis release -c`

###install

```bash
$ npm install -g fis-preprocessor-inline
```

###config

```javascript
fis.config.merge({
    ...
    modules: {
        preprocessor: {
            tpl: 'inline'
        }
    }
    ...
});
```
