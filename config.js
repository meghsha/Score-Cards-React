// Do NOT to change this configuration!!

SystemJS.config({
    baseURL: 'https://unpkg.com/',
    defaultExtension: true,
    meta: {
        './*.js': {
            'babelOptions': {
                es2015: true,
                react: true
            }
        }
    },
    map: {
        'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
        'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
        'react': 'react@16.2.0/umd/react.production.min.js',
        'react-dom': 'react-dom@16.2.0/umd/react-dom.production.min.js'
    },
    transpiler: 'plugin-babel'
});

SystemJS.import('./scripts/render.js');