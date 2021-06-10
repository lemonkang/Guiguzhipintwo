const { addWebpackAlias, override,addLessLoader}=require('customize-cra')
const path = require('path')

module.exports=override(
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "src"),
        ["@assets"]: path.resolve(__dirname, "src/assets"),
    }),

 // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题  
 addLessLoader({  
    javascriptEnabled: true,    
    modifyVars: { "@primary-color": "#1DA57A" },  
  }),
  
)