const CURRENT_MODE = process.env.VUE_APP_CURRENT_MODE

module.exports = {
    publicPath: CURRENT_MODE === 'production'
        ? '/'
        : '/',
    outputDir: CURRENT_MODE === 'production'
        ? 'dist/src'
        : 'stage/src',
    assetsDir: 'static'
}