const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Enables JSX + modern JS
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,               // CSS loader rules
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: { extensions: ['.js', '.jsx'] },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3001,
        open: true
    },
    mode: 'development'
};