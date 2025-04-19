import { useState, useContext } from "react";
import type { Ayat } from "../../types/Surah";
import Number from "../Number";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

type AyatCardProps = {
  ayat: Ayat;
};

function AyatCard({ ayat }: AyatCardProps) {
  const [shareTooltip, setShareTooltip] = useState(false);
  const { surahId } = useParams<{ surahId: string }>();
  const { theme } = useContext(ThemeContext);
  
  const handleShare = async () => {
    const shareText = `${ayat.teksArab}\n\n${ayat.teksLatin}\n\n${ayat.teksIndonesia}\n\nAl-Quran Surah ${surahId}:${ayat.nomorAyat}`;
    const shareUrl = window.location.href.split("#")[0] + `#ayat-${ayat.nomorAyat}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Al-Quran Surah ${surahId}:${ayat.nomorAyat}`,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support navigator.share
      try {
        await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
        setShareTooltip(true);
        setTimeout(() => setShareTooltip(false), 2000);
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  return (
    <div id={`ayat-${ayat.nomorAyat}`} className="bg-dark p-4 rounded-lg text-left flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <Number nomor={ayat.nomorAyat} />
        <p className="font-bold text-2xl text-right w-full">{ayat.teksArab}</p>
      </div>
      <p className="font-sm text-light">{ayat.teksLatin}</p>
      <p className="font-sm text-subtle">{ayat.teksIndonesia}</p>
      
      <div className="relative flex justify-end mt-2">
        <button 
          onClick={handleShare}
          className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-primary text-white"
          style={{ color: 'white' }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          Bagikan
        </button>
        
        {shareTooltip && (
          <span className="absolute -top-8 right-0 px-2 py-1 bg-dark text-white text-sm rounded">
            Disalin ke clipboard!
          </span>
        )}
      </div>
    </div>
  );
}

export default AyatCard;
