modules.exports = {
  extends: [
    './rules/es6.js'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: false,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: false,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      restParams: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true
    }
  },
  env:{
    es6: true
  }
}