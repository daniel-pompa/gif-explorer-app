import { useEffect, useState, type KeyboardEvent } from 'react';

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Search', onQuery }: Props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => onQuery(query), 1000);
    return () => clearTimeout(timeout);
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder={placeholder}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
