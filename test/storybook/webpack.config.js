const path = require('path');

module.exports = storybookBaseConfig => {
  return {
    ...storybookBaseConfig,
    resolve: {
      ...storybookBaseConfig.resolve,
      alias: {
        ...storybookBaseConfig.resolve.alias,
        '@': path.join(__dirname, '../../src')
      }
    }
  };
};
