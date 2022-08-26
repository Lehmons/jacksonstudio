const path = require("path");

module.exports = {
  env: {},
  dimensions: false,
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });
    config.module.rules.push({
      test: /\.(png|jpg|gif|eot|ttf|woff|woff2|srt)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    config.resolve.alias["~"] = path.resolve(__dirname);
    return config;
  },
};
