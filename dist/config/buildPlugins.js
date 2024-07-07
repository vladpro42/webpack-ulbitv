import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildPlugins(options) {
    var isDev = options.mode === 'development';
    var isProd = options.mode === 'development';
    var plugins = [
        new HtmlWebpackPlugin({ template: options.paths.html }),
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css', chunkFilename: 'css/[name].[contenthash:8].css' }));
    }
    return plugins;
}
