# eslint-plugin-prettier-rules

An eslint rule configuration which matches the output from [prettier](https://github.com/jlongster/prettier)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-prettier-rules`:

```
$ npm install eslint-plugin-prettier-rules --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-prettier-rules` globally.

## Usage

Add `prettier-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "prettier-rules"
    ]
}
```

Add `prettier-rules` to the extends section of your `.eslintrc` configuration file.
`prettier-rules/eslint` covers the stock eslint rules and `prettier-rules/react` adds jsx support if needed.

```json
{
    "extends": [
        "plugin:prettier-rules/eslint",
        "plugin:prettier-rules/react"
    ]
}




