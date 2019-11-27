module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/tictactoe/' : '/',
    css: {
        loaderOptions: {
            css: {
            // options here will be passed to css-loader
            },
            postcss: {
                "plugins": [
                    require('postcss-import'),
                    require('tailwindcss')(),
                    require('autoprefixer'),
                ]
            }
        }
    }
  }