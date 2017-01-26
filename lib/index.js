/**
 * @fileoverview A rule configuration to match prettier output
 */
'use strict';
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports = {
  configs: {
    eslint: {
      rules: {
        'array-bracket-spacing': 0,
        'arrow-parens': [ 2, 'as-needed' ],
        'comma-dangle': [ 2, 'never' ],
        'brace-style': 0,
        'dot-location': [ 2, 'property' ],
        indent: 0,
        'lines-around-comment': 0,
        'line-comment-position': 0,
        'max-len': 0,
        'multiline-ternary': 0,
        'newline-after-var': 0,
        'newline-per-chained-call': 0,
        'no-extra-parens': 0,
        'no-inline-comments': 0,
        'no-mixed-operators': 0,
        'object-curly-newline': 0,
        'object-curly-spacing': [ 2, 'always' ],
        'object-property-newline': [
          2,
          { allowMultiplePropertiesPerLine: true }
        ],
        'padded-blocks': 0,
        'quote-props': [ 2, 'as-needed' ],
        'space-before-function-paren': 0
      }
    },
    react: {
      rules: {
        'react/jsx-indent': [ 2, 2 ],
        'react/jsx-indent-props': [ 2, 2 ]
      }
    }
  }
};
