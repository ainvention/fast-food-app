module.exports = {
    root: true,
    extends: [
      '@react-native-community/eslint-config',
      'eslint-config-prettier'
    ],
    plugins: [
      'react',
      'react-native'
    ],
    'parserOptions': {
      'ecmaFeatures': {
        'jsx': true
      },
      'project': './tsconfig.json'
    },
    'env': {
      'react-native/react-native': true
    },
    'rules': {
      'prettier/prettier': 'off'
    }
  }