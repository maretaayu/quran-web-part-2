type VerseProps = {
  verse: string;
  surah: string;
};
function Verse({ verse, surah }: VerseProps) {
  return (
    <div className="bg-[url('/src/assets/VerseBackgroundImage.png')] bg-cover bg-no-repeat p-4 min-h-[155px] rounded-2xl text-left flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <p className="font-light text-sm">📖 Your daily verse</p>
        <p className="font-bold text-sm md:text-base">{verse}</p>
      </div>
      <p className="font-light text-sm">{surah}</p>
    </div>
  );
}

export default Verse;
