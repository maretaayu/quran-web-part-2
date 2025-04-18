import { Link } from "react-router-dom";
import DetailSurahContainer from "../components/DetailSurah/DetailSurahContainer";

function DetailSurahPage() {
  return (
    <>
      <div className="p-5 text-left">
        <Link to="/" className="text-light">
          ← Daftar Surah
        </Link>
      </div>
      <DetailSurahContainer />
    </>
  );
}

export default DetailSurahPage;
