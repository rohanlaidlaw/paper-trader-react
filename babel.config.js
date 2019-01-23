/* eslint-disable */

module.exports = {
    env: {
        development: {
            presets: [
                '@babel/env',
                '@babel/react',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
            ],
        },
        test: {
            presets: [
                '@babel/env',
                '@babel/react',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
            ],
        }
    }
};
