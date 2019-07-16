module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "arrowFunctions": true,
            "defaultParams": true,
            "jsx": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-empty": 2, // 禁止空语句块
        "func-style": 0,
        "no-console": ["error", { allow: ["log"] }], // 允许打印
        "react/prop-types": 0
    },
    "parser": "babel-eslint"
};