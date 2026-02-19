import * as esbuild from 'esbuild'

// 使用 esbuild 打包成 ES Module 格式
esbuild.build({
    entryPoints: ['src/index.js'], // 入口文件
    bundle: true, // 打包所有依赖
    minify: true, // 压缩代码
    outfile: 'dist/lire.js', // 输出文件
    format: 'esm', // 输出 ES 模块
    platform: 'browser', // 目标平台：浏览器
    target: ['es2020'], // 目标 ES 版本
}).then(() => {
    console.log('✅ Lire 框架打包成功！')
}).catch((err) => {
    console.error('❌ Lire 框架打包失败：', err)
    process.exit(1)
})