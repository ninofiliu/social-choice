module.exports = {
    devtool: 'source-map',
    mode: 'production',
    output: {
        path: `${__dirname}/esmodule`,
        filename: 'index.js',
        library: 'social-choice',
        libraryTarget: 'umd'
    },
};