process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

require('ignore-styles');

require('babel-register')({
  ignore: [/(node_modules)/],
  presets: ['env', 'react'],
});

require('./index');
