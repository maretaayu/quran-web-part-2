import { useContext } from "react";
import Profile from "./Profile";
import Verse from "./Verse";
import Photo from "../assets/Photo.png";
import { ThemeContext } from "../context/ThemeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className="relative">
      <div className={`absolute top-0 left-0 w-full h-60 -mt-10 bg-[url('/src/assets/HeroBackgroundImage.png')] bg-cover bg-center bg-no-repeat rounded-2xl ${theme === 'light' ? 'opacity-80' : 'opacity-100'}`}></div>
      <div className="relative z-10 px-5 pt-8 flex flex-col gap-8">
        <Profile greeting="Good Morning" name="Mareta Ayu 👋🏻 " avatar={Photo} />
        <Verse
          verse="“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).’”"
          surah="Al-A'raaf (7:25)"
        />
      </div>
    </div>
  );
}

export default Hero;
