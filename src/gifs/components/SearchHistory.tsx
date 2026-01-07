interface Props {
  searches: string[];
}

export const SearchHistory = ({ searches }: Props) => {
  return (
    <section className='search-history'>
      <h2>Search History</h2>
      <ul className='search-history-list'>
        {searches.map(term => (
          <li key={term}>{term}</li>
        ))}
      </ul>
    </section>
  );
};
