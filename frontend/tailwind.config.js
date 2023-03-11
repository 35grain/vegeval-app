module.exports = {
    daisyui: {
        themes: [{
            dark: {
                "primary": "#7CA982",
                "secondary": "#2C423F",
                "accent": "#94B9AF",
                "neutral": "#4C5B61",
                "base-100": "#221D26",
                "base-content": "#FFFFFF",
                "info": "#154FEF",
                "success": "#7CA982",
                "warning": "#FCAF58",
                "error": "#EA6661",
            },
        }, ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")]
}