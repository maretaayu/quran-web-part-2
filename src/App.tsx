import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import DetailSurahPage from "./pages/DetailSurahPage";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <div className="fixed top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/surah/:surahId" element={<DetailSurahPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
