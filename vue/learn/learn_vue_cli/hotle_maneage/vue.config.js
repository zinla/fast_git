let path = require('path');

module.exports = {
    lintOnSave: false,
    devServer:{
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8888
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@c": path.resolve(__dirname, 'src/components'),
                "@v": path.resolve(__dirname, 'src/views'),
                "@a": path.resolve(__dirname, 'src/assets')
            }
        }
    }
}