module.exports = {
  rules: {
    'array-bracket-spacing': [
      2,
      'never',
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    'newline-after-var': [1, 'always'],
    'brace-style': [2, '1tbs'],
    camelcase: [
      2,
      {
        properties: 'always'
      }
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'eol-last': 2,
    'func-style': [
      2,
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    indent: [
      2,
      4,
      {
        SwitchCase: 1
      }
    ],
    'linebreak-style': [2, 'windows'],
    'max-len': [
      2,
      200,
      4,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignorePattern:
          '^\\s*(const|let|var)\\s+\\w+\\s+\\=\\s+\\/.*\\/(|i|g|m|ig|im|gm|igm);?$'
      }
    ],
    'max-nested-callbacks': [2, 4],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
        maxEOF: 1
      }
    ],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'always'],
    'padded-blocks': [2, 'never'],
    quotes: [1, 'single', 'avoid-escape'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    semi: [2, 'always'],
    'keyword-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        exceptions: ['-', '+'],
        markers: ['=', '!']
      }
    ]
  }
};
