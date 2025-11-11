/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2C5282", // Deep, trustworthy blue
        "secondary": "#D69E2E", // Warm, inviting gold/ochre
        "background-light": "#F7FAFC", // Off-white
        "background-dark": "#101922", // Custom dark background for better contrast
        "text-light": "#2D3748", // Dark grey for body text
        "text-dark": "#F7FAFC", // Off-white for dark mode text
        "text-muted-light": "#A0AEC0", // Light grey for inactive/helper text
        "text-muted-dark": "#A0AEC0", // Light grey for dark mode helper text
        "success": "#38A169", // Green for confirmed
        "warning": "#D69E2E", // Amber for pending
        "info": "#3182CE", // Blue for completed
        "border-light": "#E2E8F0", // Light border color
        "border-dark": "#2D3748", // Dark border color
        "card-light": "#FFFFFF",
        "card-dark": "#1A202C",
        "danger": "#E53E3E"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
