const path = require('path')

module.exports = {
    configureWebpack: {
        externals: {
            vue: 'Vue'
        }
    }
}
