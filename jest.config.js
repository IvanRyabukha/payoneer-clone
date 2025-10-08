module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|react-navigation' +
      '|@react-native-community' +
      '|react-native-gesture-handler' +
      '|react-native-reanimated' +
      ')/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
