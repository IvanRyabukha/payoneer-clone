module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-typescript',
    '@babel/preset-flow',
  ],
  plugins: [
    'react-native-worklets/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
