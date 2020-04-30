const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = (env = {}) => {
  const {mode = `development`} = env;

  const isProd = mode === `production`;
  const isDev = mode === `development`;

  const getStyleLoader = () => [
    isProd ? MiniCssExtractPlugin.loader : {loader: `style-loader`},
    {loader: `css-loader`}
  ];

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: `public/index.html`,
        title: `Build Sandbox`,
        buildTime: new Date().toString(),
      })
    ];

    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({filename: `main-[hash:4].css`}));
    }

    return plugins;
  }
  
  return {
    mode: isProd ? `production` : isDev && `development`,

    output: {
      filename: isProd ? `main-[hash:4].js` : void 0
    },

    module: {
      rules: [
        //Loading JS
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{loader: `babel-loader`}],
        },
        //Loading image
        {
          test: /\.(png|jpeg|jpg|gif|ico)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
                outputPath: `images`,
                name: `[name]-[sha1:hash:7].[ext]`,
              },
            }
          ],
        },
        //Loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
                outputPath: `fonts`,
                name: `[name].[ext]`,
              },
            }
          ],
        },
        //Loading CSS
        {
          test: /\.(css)$/,
          use: getStyleLoader(),
        },
        //Loading SASS/SCSS
        {
          test: /\.(scss|sass)$/,
          use: [...getStyleLoader(), {loader: `sass-loader`}],
        }
      ]
    },

    plugins: getPlugins(),

    devServer: {
      open: true,
    },

    devtool: `source-map`,
  };
};