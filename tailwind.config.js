/* eslint-disable global-require */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                josefin: ['Josefin Sans', 'sans-serif'],
                karla: ['Karla', 'sans-serif'],
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#c08d4c',
                    secondary: '#c08c4d',
                    accent: '#707070',
                    black: '#2d2a2a',
                    'base-100': '#ffffff',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
