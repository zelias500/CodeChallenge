var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'testing'
    },
    port: 3000,
    db: 'mongodb://localhost/testing-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'testing'
    },
    port: 3000,
    db: 'mongodb://localhost/testing-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'testing'
    },
    port: 3000,
    db: 'mongodb://localhost/testing-production'
  }
};

module.exports = config[env];
