const { withKeystone } = require("@keystone-6/core/next")

const isProd = process.env.NODE_ENV === "production";

module.exports = withKeystone({
  env: {
    STATIC_URL: isProd ? process.env.STATIC_URL : "",
  },
  assetPrefix: isProd ? process.env.STATIC_URL : "",
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})