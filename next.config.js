module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    const ignored = /[\\/]node_modules[\\/]|[\\/]\\.next[\\/]/;
    config.watchOptions = {
      ignored,
    };

    return config
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
  
}