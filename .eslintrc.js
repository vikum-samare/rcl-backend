module.exports = {
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "impliedStrict": true
        }
    },
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "globals": {
        "process": false,
        "__dirname": false,
        "setImmediate": false,
        // flow keywords:
        "Class": false,
        "$Subtype": false,
        // chai
        "assert": false,
        // custom
        "include": false,
        "include_test": false
    },
    "rules": {

        // Possible Errors
        "no-await-in-loop": 2,
        "no-compare-neg-zero": 2,
        "no-cond-assign": 2,
        "no-console": 2,
        "no-constant-condition": 1,
        "no-control-regex": 1,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 1,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-extra-boolean-cast": 0,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-obj-calls": 2,
        "no-prototype-builtins": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 1,
        "no-template-curly-in-string": 1,
        "no-unexpected-multiline": 1,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        "use-isnan": 2,
        "valid-jsdoc": 1,
        "valid-typeof": 2,

        // Best Practicies
        "accessor-pairs": 0,
        "array-callback-return": 1,
        "block-scoped-var": 1,
        "class-methods-use-this": [1, { "exceptMethods": ["render"] }],
        "complexity": 1,
        "consistent-return": 2,
        "curly": [2, "multi-or-nest"],
        "default-case": 2,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "eqeqeq": 2,
        "guard-for-in": 1,
        "no-alert": 1,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-div-regex": 2,
        "no-else-return": 0,
        "no-empty-function": 2,
        "no-empty-pattern": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-fallthrough": 0,
        "no-floating-decimal": 2,
        "no-global-assign": 2,
        "no-implicit-coercion": 1,
        "no-implicit-globals": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 1,
        "no-iterator": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": 0,
        "no-multi-spaces": [2, { exceptions: { "VariableDeclarator": true }}],
        "no-multi-str": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-restricted-properties": 2,
        "no-return-assign": 2,
        "no-return-await": 2,
        "no-script-url": 2,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 1,
        "no-unused-expressions": 1,
        "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-useless-concat": 1,
        "no-useless-escape": 2,
        "no-useless-return": 2,
        "no-void": 2,
        "no-warning-comments": 0,
        "no-with": 2,
        "prefer-promise-reject-errors": 0,
        "radix": 1,
        "require-await": 2,
        "vars-on-top": 1,
        "wrap-iife": 2,
        "yoda": 2,

        // Strict Mode
        "strict": 1,

        // Variables
        "init-declarations": 2,
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-restricted-globals": 1,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 2,
        "no-unused-vars": [1, { "ignoreRestSiblings": true, "argsIgnorePattern": "req" }],
        "no-use-before-define": 2,

        // Node.js & Common.js
        "callback-return": 2,
        "global-require": 2,
        "handle-callback-err": 1,
        "no-mixed-requires": 1,
        "no-new-require": 2,
        "no-path-concat": 2,
        "no-process-env": 2,
        "no-process-exit": 2,
        "no-restricted-modules": 0,
        "no-sync": 0,

        // Stylistic Issues
        "array-bracket-spacing": 2,
        "block-spacing": 2,
        "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
        "camelcase": 1,
        "capitalized-comments": 0,
        "comma-dangle": 1,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-this": [2, "self"],
        "eol-last": 2,
        "func-call-spacing": 2,
        "func-name-matching": 0,
        "func-names": 0,
        "func-style": 0,
        "id-blacklist": 0,
        "id-length": 0,
        "id-match": 0,
        "indent": [2, 4, { "SwitchCase": 1 }],
        "jsx-quotes": 2,
        "key-spacing": 2,
        "keyword-spacing": 2,
        "line-comment-position": 0,
        "linebreak-style": 0,
        "lines-around-comment": 0,
        "lines-around-directive": 1,
        "max-depth": 1,
        "max-len": 0,
        "max-lines": 1,
        "max-nested-callbacks": 2,
        "max-params": [1, 5],
        "max-statements": 0,
        "max-statements-per-line": [1, { "max": 2 }],
        "multiline-ternary": 0,
        "new-cap": 0,
        "new-parens": 1,
        "newline-after-var": 0,
        "newline-before-return": 0,
        "newline-per-chained-call": 0,
        "no-array-constructor": 1,
        "no-bitwise": 1,
        "no-continue": 2,
        "no-inline-comments": 0,
        "no-lonely-if": 2,
        "no-mixed-operators": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-assign": 2,
        "no-multiple-empty-lines": 2,
        "no-negated-condition": 0,
        "no-nested-ternary": 1,
        "no-new-object": 1,
        "no-plusplus": 0,
        "no-restricted-syntax": 0,
        "no-tabs": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "nonblock-statement-body-position": 2,
        "object-curly-newline": 0,
        "object-curly-spacing": [1, "always", { "objectsInObjects": false }],
        "object-property-newline": 0,
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "operator-assignment": 1,
        "operator-linebreak": 0,
        "padded-blocks": 0,
        "quote-props": 0,
        "quotes": 2,
        "require-jsdoc": 0,
        "semi": [2, "never"],
        "semi-spacing": 2,
        "sort-keys": 0,
        "sort-vars": 0,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 0,
        "spaced-comment": 2,
        "template-tag-spacing": 0,
        "unicode-bom": 0,
        "wrap-regex": 0,

        // ECMA Script 6
        "arrow-body-style": 2,
        "arrow-parens": 0,
        "arrow-spacing": 2,
        "constructor-super": 1,
        "generator-star-spacing": 1,
        "no-class-assign": 2,
        "no-confusing-arrow": 0,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": 2,
        "no-new-symbol": 2,
        "no-restricted-imports": 0,
        "no-this-before-super": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 1,
        "no-useless-rename": 1,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-destructuring": 0,
        "prefer-numeric-literals": 1,
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 0,
        "require-yield": 1,
        "rest-spread-spacing": 2,
        "sort-imports": 0,
        "symbol-description": 0,
        "template-curly-spacing": 2,
        "yield-star-spacing": 1
    }
}
