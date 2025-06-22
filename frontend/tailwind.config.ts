// tailwind.config.js


export default {
  content: [
    "./index.html", // include root
    "./src/**/*.{js,ts,jsx,tsx}", // core source files
  ],
 

  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },

  plugins: [], // ✅ Add Tailwind plugins here if needed later
};
