interface Props {
  searches: string[];
  onSelectTerm: (searchTerm: string) => void;
}

export const SearchHistory = ({ searches, onSelectTerm }: Props) => {
  if (searches.length === 0) return null;

  return (
    <section className='search-history'>
      <h2>Recent Searches</h2>
      <ul className='search-history-list'>
        {searches.map((term, index) => (
          <li key={`${term}-${index}`}>
            <button
              type='button'
              className='history-btn'
              onClick={() => onSelectTerm(term)}
            >
              {term}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
