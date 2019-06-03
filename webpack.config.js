// @ts-nocheck
const common = {
    devtool: 'source-map',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        library: 'social-choice',
        libraryTarget: 'umd'
    }
}

const main = {
    ...common,
    output: {
        ...common.output,
        filename: 'main.js',
    },
    target: 'node',
}

const browser = {
    ...common,
    output: {
        ...common.output,
        filename: 'browser.js',
    },
    target: 'web',
}

module.exports = [main, browser];