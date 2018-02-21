module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recomended'].concat(
    [
      './rules/style.js',
      './rules/variables.js',
      './rules/bestPractices.js',
      './rules/possibleErrors.js'
    ].map(require.resolve)
  ),
  env: {
    browser: true,
    node: true,
    jquery: true
  },
  globals:{
    $:true
  }
};
