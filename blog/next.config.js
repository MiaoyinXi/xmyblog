const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require['.css']=file=>{}
}

module.exports = withCss({})
