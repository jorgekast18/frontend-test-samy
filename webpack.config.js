const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};