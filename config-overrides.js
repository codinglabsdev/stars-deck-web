const path = require('path');

module.exports = function override(config) {
  const newConfig = { ...config };
  newConfig.resolve = {
    ...newConfig.resolve,
    alias: { '~': path.resolve(__dirname, 'src') },
  };

  return newConfig;
};
