import { useState, useEffect } from "react";
import SurahList from "./SurahList";
import type { Surah } from "../../types/Surah";

function SurahContainer() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [filteredSurahs, setFilteredSurahs] = useState<Surah[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch("https://equran.id/api/v2/surat");
        if (!response.ok) {
          throw new Error("Failed to fetch surahs");
        }
        const data = await response.json();
        setSurahs(data.data);
        setFilteredSurahs(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
        setIsLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSurahs(surahs);
      return;
    }

    const lowercaseQuery = searchQuery.toLowerCase();
    const filtered = surahs.filter(
      (surah) =>
        surah.namaLatin.toLowerCase().includes(lowercaseQuery) ||
        surah.nama.includes(lowercaseQuery) ||
        surah.arti.toLowerCase().includes(lowercaseQuery) ||
        surah.nomor.toString().includes(lowercaseQuery)
    );
    setFilteredSurahs(filtered);
  }, [searchQuery, surahs]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="px-5 pt-6 pb-2">
        <input
          type="text"
          placeholder="Cari surah..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 rounded-lg bg-dark text-light focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <SurahList surahs={filteredSurahs} />
      {filteredSurahs.length === 0 && (
        <p className="text-center py-4">Tidak ada surah yang ditemukan</p>
      )}
    </div>
  );
}

export default SurahContainer;
