export const theme = {
  colors: {
    primary: "#102C5C",
    "primary-light": "#1A3D7C",
    "primary-dark": "#0A1F3F",
    secondary: "#C79A3B",
    "secondary-light": "#D4AD5E",
    "secondary-dark": "#A67F2E",
    accent: "#D8D8D8",
    dark: "#0F172A",
    "dark-lighter": "#1E293B",
    light: "#F8FAFC",
    white: "#FFFFFF",
    background: "#FAFAFA",
    muted: "#F3F4F6",
    border: "#E5E7EB",
    success: "#16A34A",
    warning: "#F59E0B",
    overlay: "rgba(15, 23, 42, 0.6)",
    glass: "rgba(255, 255, 255, 0.08)",
    "glass-border": "rgba(255, 255, 255, 0.12)",
  },
  fonts: {
    heading: "var(--font-poppins), Poppins, sans-serif",
    body: "var(--font-inter), Inter, sans-serif",
  },
  radius: {
    sm: "10px",
    md: "18px",
    lg: "28px",
    xl: "40px",
    full: "9999px",
  },
  shadow: {
    soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
    medium: "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.06)",
    premium: "0 20px 60px -12px rgba(16, 44, 92, 0.25)",
    glow: "0 0 40px rgba(199, 154, 59, 0.3)",
    card: "0 4px 30px rgba(0, 0, 0, 0.06)",
    "card-hover": "0 20px 60px rgba(0, 0, 0, 0.12)",
  },
  transition: {
    fast: "0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    normal: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    premium: "0.6s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  gradients: {
    "primary-gradient": "linear-gradient(135deg, #102C5C 0%, #1A3D7C 100%)",
    "secondary-gradient": "linear-gradient(135deg, #C79A3B 0%, #D4AD5E 100%)",
    "dark-gradient": "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
    "hero-overlay": "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(16, 44, 92, 0.7) 100%)",
    "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
    "gold-shine": "linear-gradient(90deg, #C79A3B 0%, #D4AD5E 50%, #C79A3B 100%)",
  },
  container: {
    maxWidth: "1280px",
    padding: "24px",
  },
} as const;

export type Theme = typeof theme;
export default theme;
