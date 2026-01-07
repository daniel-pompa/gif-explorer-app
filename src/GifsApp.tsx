import { mockGifs } from './mock-data/gifs.mock';
import { Header, SearchBar } from './shared/components';
import { GifList, SearchHistory } from './gifs/components';
export const GifsApp = () => {
  return (
    <>
      <Header
        title='Gifs Explorer'
        description='Discover the best animated GIFs from GIPHY.'
      />
      <SearchBar placeholder='Search GIFs' />
      <SearchHistory
        searches={[
          'Dragon Ball',
          'Goku',
          'Jubei Kibagami',
          'Hommer Simpson',
          'Bart Simpson',
          'Iron Man',
          'Funny cat',
          'Baby dancing',
        ]}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
