const path=require("path"); 

module.exports={
    entry:"./src/app.js",
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"public","src")
    },
    mode:"development",
    module : {
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[ "@babel/preset-react",
                        "@babel/preset-env" ]
                    }
                }
            }
        ]
    },
    devtool : 'cheap-module-source-map',
    devServer:{
        contentBase:path.join(__dirname,"public") 
    } 
}