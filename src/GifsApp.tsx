import type { Gif } from './gifs/interfaces/gif.interface';
import { Header, SearchBar } from './shared/components';
import { GifList, SearchHistory } from './gifs/components';
import { useState } from 'react';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (recentSearches.includes(query)) return;

    setRecentSearches([query, ...recentSearches].splice(0, 6));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };

  const handleTermClicked = (searchTerm: string) => {
    console.log({ searchTerm });
  };

  return (
    <>
      <Header
        title='Gifs Explorer'
        description='Discover the best animated GIFs from GIPHY.'
      />
      <SearchBar placeholder='Search GIFs' onQuery={handleSearch} />
      <SearchHistory searches={recentSearches} onSelectTerm={handleTermClicked} />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
