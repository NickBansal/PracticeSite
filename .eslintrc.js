module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
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
        "react",
        "prettier"
    ],
    "rules": {
        "no-underscore-dangle": 0,
        "jest/no-identical-title": 0,
        "react/jsx-indent": 0,
        "react/no-typos": 0,
        "react/prop-types": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-props-no-spreading": 0,
        "no-alert": 1,
        "prettier/prettier": [
            "error",
            {
                "useTabs": true,
                "tabWidth": 4,
                "singleQuote": true
            }
        ],
        "consistent-return": 0,
        "react-hooks/exhaustive-deps": 0,
        "no-tabs": 0,
        "no-plusplus": 0,
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true
            }
        ]
    }
};


