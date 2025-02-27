module.exports = {
    content: [
        "./index.html",
    ],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1440px",
                "2xl": "1920px",
            },
        },
        extend: {
            fontSize: {
                '4xl-2': '30px',
                '6xl': "60px",
                '7xl': "84px",
            },
            fontFamily: {
                "inter": ["Inter", "sans-serif"],
            },
            colors: {
                "primary": "#7EE49C80",
                "lightGreen": "#B5EFCB",
            },
            boxShadow: {
                "default": '0px 0px 20px 10px #ABCDFE',
            },
            backgroundImage: {
                "lightGreen": "#B5EFCB",
            },
            background: {
               "lightGreen": "#B5EFCB",
               "primary": "#7EE49C80",

            }
        }
    },
    plugins: [],
};
