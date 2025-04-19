type VerseProps = {
  verse: string;
  surah: string;
};
function Verse({ verse, surah }: VerseProps) {
  return (
    <div className="bg-[url('/src/assets/VerseBackgroundImage.png')] bg-cover bg-no-repeat p-4 min-h-[155px] rounded-2xl text-left flex flex-col justify-between" style={{ color: 'white' }}>
      <div className="flex flex-col gap-2">
        <p className="font-light text-sm" style={{ color: 'white !important' }}>📖 Your daily verse</p>
        <p className="font-bold text-sm md:text-base" style={{ color: 'white !important' }}>{verse}</p>
      </div>
      <p className="font-light text-sm" style={{ color: 'white !important' }}>{surah}</p>
    </div>
  );
}

export default Verse;
