import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import DetailSurahPage from "./pages/DetailSurahPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/surah/:surahId" element={<DetailSurahPage />} />
      </Routes>
    </div>
  );
}

export default App;
