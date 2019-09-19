module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-indent": ["error", 4],
        "indent": ["error", 4],
        "react/jsx-props-no-spreading": 0,
        "import/no-extraneous-dependencies": 0
    }
};


