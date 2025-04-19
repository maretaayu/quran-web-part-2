import { useContext } from "react";
import { Link } from "react-router-dom";
import DetailSurahContainer from "../components/DetailSurah/DetailSurahContainer";
import { ThemeContext } from "../context/ThemeContext";

function DetailSurahPage() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <>
      <div className="p-5 text-left">
        <Link to="/" className={`${theme === 'light' ? 'text-dark' : 'text-light'}`}>
          ← Daftar Surah
        </Link>
      </div>
      <DetailSurahContainer />
    </>
  );
}

export default DetailSurahPage;
