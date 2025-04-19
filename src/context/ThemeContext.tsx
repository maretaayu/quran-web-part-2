import { createContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}



// Logic Theme di dalam Provider
// •	theme: state utama untuk nyimpan tema
// •	Saat pertama kali dijalankan, dia cek localStorage
// •	Kalau ada theme sebelumnya → pakai itu
// •	Kalau belum ada → default dark

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get theme from localStorage on initial load, default to dark if not set
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "dark";
  });

  useEffect(() => {
    // Apply theme to document body
    document.body.className = theme;
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fungsi Toggle
  // •	Saat dipanggil, fungsi ini mengganti theme ke sebaliknya
	// •	Dipakai untuk button seperti “🌙 / ☀️”
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 