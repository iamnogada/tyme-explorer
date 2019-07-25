const path = require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')


module.exports = {
    outputDir: 'backend/dist',
    chainWebpack: config => {
        config
            .entry("app")
            .clear()
            .add("./frontend/main.js")
            .end();
        config.resolve.alias
            .set("@", path.join(__dirname, "./frontend"))
        
    },
    configureWebpack:{
        plugins:[
            new HtmlWebpackPlugin(
                {
                  templateParameters: function () { /* omitted long function */ },
                  template: './frontend/public/index.html',
                  favicon: './frontend/public/favicon.ico',
                }
              ),
        ]
    }
}