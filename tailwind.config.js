/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'], // Tambahan font serif untuk judul
      },
      colors: {
        primary: '#FCE300',   // Kuning Editorial yang sangat cerah
        dark: '#111111',      // Hitam pekat untuk teks utama
        light: '#FFFFFF',     // Putih bersih
      },
      maxWidth: {
        '8xl': '1440px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, 
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}