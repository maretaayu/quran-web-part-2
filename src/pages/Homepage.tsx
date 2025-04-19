import { useContext } from "react";
import SurahContainer from "../components/Surah/SurahContainer";
import Hero from "../components/Hero";
import { ThemeContext } from "../context/ThemeContext";

function Homepage() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`${theme === 'light' ? 'text-dark' : 'text-white'}`}>
      <Hero />
      <SurahContainer />
    </div>
  );
}

export default Homepage;
