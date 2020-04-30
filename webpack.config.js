module.exports = {
  mode: `development`,

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
        use: [{loader: `style-loader`}, {loader: `css-loader`}],
      },
      //Loading SASS/SCSS
      {
        test: /\.(scss|sass)$/,
        use: [{loader: `style-loader`}, {loader: `css-loader`}, {loader: `sass-loader`}],
      }
    ]
  }
};