/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{ 
        tablet:'837px',
        tablet1:'838px',
        mobile:'600px',  
        'min-mobile': { 'raw': '(max-width: 600px)' },
        'min-tablet': { 'raw': '(max-width: 654px)' },
        'min-tablet': { 'raw': '(max-width: 837px)' },
        'min-laptop': { 'raw': '(max-width: 1028px)' },
        'laptop': { 'raw': '(max-width: 900px)' },
        'small-1': { 'raw': '(max-width: 524px)' },
        'small-2': { 'raw': '(max-width: 502px)' },
        'small-3': { 'raw': '(max-width: 451px)' },
        'small-4': { 'raw': '(max-width: 405px)' },
      },
      colors:{
        'blues':'#096AE1'
      },
        
      boxShadow:{
        'brands':'rgba(0, 0, 0, 0.09) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        'input':'rgba(0, 0, 0, 0.09) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        'social':'rgba(60, 64, 67, 1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      'blur':'rgba(3, 102, 214, 0.3) 0px 0px 0px 1px',
      'greenblur':'rgb(22 163 74 / 1) 0px 0px 0px 1px',
    }
    },
  },
  plugins: [],
}

