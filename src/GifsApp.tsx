import { Header, SearchBar } from './shared/components';
import { GifList, SearchHistory } from './gifs/components';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const { gifs, recentSearches, isLoading, error, handleSearch, handleTermClicked } =
    useGifs();

  return (
    <>
      <Header
        title='Gifs Explorer'
        description='Discover the best animated GIFs from GIPHY.'
      />

      <SearchBar placeholder='Search GIFs' onQuery={handleSearch} />
      <SearchHistory searches={recentSearches} onSelectTerm={handleTermClicked} />

      {/* Loading */}
      {isLoading && (
        <div className='status-container'>
          <div className='loader' />
          <p>Loading GIFs...</p>
        </div>
      )}

      {/* Error */}
      {error && <div className='error-container'>{error}</div>}

      {/* Content */}
      {!isLoading && !error && <GifList gifs={gifs} />}
    </>
  );
};
