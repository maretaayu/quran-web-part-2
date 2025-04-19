import type { Surah } from "../../types/Surah";
import ChevronRight from "../../assets/ChevronRightIcon.svg";

type DetailSurahInfoProps = {
  surah: Surah;
};

function DetailSurahInfo({ surah }: DetailSurahInfoProps) {
  return (
    <div className="bg-[url('/src/assets/AyatBackgroundImage.png')] relative bg-cover bg-no-repeat py-5 px-4 rounded-2xl text-left" style={{ color: 'white' }}>
      <div className="mb-8 flex flex-col gap-2">
        <p className="font-bold text-2xl" style={{ color: 'white !important' }}>{surah.namaLatin} </p>
        <p className="font-light text-sm" style={{ color: 'white !important' }}>{surah.arti}</p>
        <hr className="opacity-10" />
        <p className="font-semibold text-sm" style={{ color: 'white !important' }}>
          {surah.tempatTurun} • {surah.jumlahAyat} Ayat
        </p>
      </div>
      <div className="flex items-center justify-between bg-accent-light-purple px-3 py-1 absolute bottom-0 left-0 w-full rounded-b-2xl">
        <p style={{ color: 'white !important' }}>Tentang surah {surah.namaLatin}</p>
        <img src={ChevronRight} alt="Chevron Right" />
      </div>
    </div>
  );
}

export default DetailSurahInfo;
