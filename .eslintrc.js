module.exports = {
    parser: "babel-eslint",
    plugins: ["react", "react-native"],
    extends: [
        "eslint:recommended",
        "plugin:react-native/all",
        "@react-native-community",
        "plugin:react/recommended"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    env: {
        es6: true,
        node: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: { jsx: true }
    },
    rules: {
        avoidEscape: 0,
        quotes: ["error", "double"],

        "no-empty": 1,
        "no-console": 1,
        "no-debugger": 1,
        "valid-typeof": 1,
        "no-dupe-args": 1,
        "no-ex-assign": 1,
        "no-obj-calls": 1,
        "no-dupe-keys": 1,
        "no-extra-semi": 1,
        "global-require": 0,
        "no-cond-assign": 1,
        "no-func-assign": 1,
        "no-unused-vars": 1,
        "no-regex-spaces": 1,
        "no-sparse-arrays": 1,
        "no-control-regex": 1,
        "no-await-in-loop": 1,
        "no-duplicate-case": 1,
        "no-unsafe-finally": 1,
        "no-invalid-regexp": 1,
        "no-unsafe-negation": 1,
        "no-compare-neg-zero": 1,
        "no-inner-declarations": 1,
        "no-extra-boolean-cast": 1,
        "no-prototype-builtins": 1,
        "no-constant-condition": 1,
        "no-unexpected-multiline": 1,
        "no-irregular-whitespace": 1,
        "react-native/no-raw-text": 0,
        "no-empty-character-class": 1,
        "no-mixed-spaces-and-tabs": 1,
        "import/prefer-default-export": 0,
        "react-native/no-inline-styles": 0,
        "comma-dangle": ["error", "never"],
        "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".js", ".jsx"] }
        ]
    }
};
