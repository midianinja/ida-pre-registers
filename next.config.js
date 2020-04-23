const secrets = require('./secrets.json');

module.exports = {
  env: secrets ,
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    };

    return config;
  }
};
