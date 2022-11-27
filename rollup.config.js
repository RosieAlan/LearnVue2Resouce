// 默认导出一个对象 作为打包的配置文件

import babel from 'rollup-plugin-babel'

export default{
    input:'./src/index.js',//入口
    output:{
        file:'./dist/vue.js',//出口
        name:'Vue',
        format:'umd',
        sourcemap:true,//调试源代码
    },
    plugins:[
        babel({ //所有的插件都是函数
            exclude:'node_modules/**'
        })
    ]
}