const withSass = require('@zeit/next-sass')
const withTM = require('next-plugin-transpile-modules');
const path = require('path');

module.exports = withTM(withSass({
    // Tell next to transpile the react-bulma-components module
    transpileModules: ['react-bulma-components'],
    // Add to webpack configuration the folder where you put the _variables file
    // NOTE: this also allow to use abolute import from this folder not only for the v_variables.sass file
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.modules.push(path.resolve(__dirname, 'pages'));
        return config
    },
}))