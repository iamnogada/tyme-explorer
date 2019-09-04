const path = require('path')
const CopyWebpackPlugin =require('copy-webpack-plugin')
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
            new CopyWebpackPlugin(
                [
                  {
                    from: path.join(__dirname, "./frontend/public"),
                    to: '.',
                    toType: 'dir',
                    ignore: [
                      '.DS_Store'
                    ]
                  }
                ]
              ),
              new HtmlWebpackPlugin(
                {
                  template: "./frontend/public/index.html"
                }
              ),
        ]
    }
}