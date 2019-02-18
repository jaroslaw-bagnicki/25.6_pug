module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2016
    },
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "eol-last": ["error", "always"],
        "no-multiple-empty-lines": [
            "error",
            { "max": 1, "maxBOF": 0, "maxEOF": 0 }
        ],
        "no-console": "warn",
        "no-unused-vars": "warn"
    }
};