/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                surface: {
                    base: '#000000',
                    raised: '#111111',
                },
                border: {
                    muted: '#ffffff',
                    strong: '#d9dce0',
                }
            },
            fontFamily: {
                primary: ['GT-America', 'sans-serif'],
            },
            fontSize: {
                'xs': ['10px', '1.5'],
                'sm': ['12px', '1.5'],
                'md': ['14px', '1.5'],
                'base-prada': ['16px', '24px'],
                'lg': ['16px', '1.5'],
                'xl': ['20px', '1.2'],
                '2xl': ['24px', '1.2'],
                '3xl': ['32px', '1.2'],
            },
            fontWeight: {
                base: '400',
            },
            spacing: {
                '1': '1px',
                '2': '6px',
                '3': '8px',
                '4': '10px',
                '5': '12px',
                '6': '14px',
                '7': '16px',
                '8': '20px',
            },
            borderRadius: {
                'xs': '50px',
            },
            transitionDuration: {
                'instant': '150ms',
                'fast': '200ms',
                'normal': '300ms',
            }
        },
    },
    plugins: [],
}