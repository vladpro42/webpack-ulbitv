import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var isDev = options.mode === 'development';
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
    };
    var tsxLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        scssLoader, tsxLoader
    ];
}
