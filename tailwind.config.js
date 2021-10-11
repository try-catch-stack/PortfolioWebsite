module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#EEEEEE',
                navText: '#E3FDFD',
                navTextDark: '#393E46',
                primaryBg: '#364F6B',
                navBg: '#393E46',
                skillsBg: '#112D4E',
                skillsBgLight: '#E3FDFD',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
