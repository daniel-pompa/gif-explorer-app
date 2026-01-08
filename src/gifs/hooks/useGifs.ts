import { useEffect, useRef, useState } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

const normalizeQuery = (query: string): string => query.trim().toLowerCase();

export const useGifs = () => {
  // Restore last results to improve UX on refresh
  const [gifs, setGifs] = useState<Gif[]>(() => {
    const stored = localStorage.getItem('lastGifs');
    return stored ? JSON.parse(stored) : [];
  });

  // Restore search history
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const stored = localStorage.getItem('recentSearches');
    return stored ? JSON.parse(stored) : [];
  });

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // In-memory cache to avoid unnecessary API calls
  const gifsCache = useRef<Record<string, Gif[]>>({});

  // Persist history and last results
  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    localStorage.setItem('lastGifs', JSON.stringify(gifs));
  }, [recentSearches, gifs]);

  const fetchGifs = async (query: string): Promise<void> => {
    const normalizedQuery = normalizeQuery(query);
    if (!normalizedQuery) return;

    setIsLoading(true);
    setError(null);

    if (gifsCache.current[normalizedQuery]) {
      setGifs(gifsCache.current[normalizedQuery]);
      setIsLoading(false);
      return;
    }

    try {
      const result = await getGifsByQuery(normalizedQuery);
      gifsCache.current[normalizedQuery] = result;
      setGifs(result);
    } catch (err) {
      setError('Something went wrong while loading GIFs.');

      if (import.meta.env.DEV) {
        console.error('Failed to fetch gifs', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query: string): Promise<void> => {
    const normalizedQuery = normalizeQuery(query);
    if (!normalizedQuery) return;

    await fetchGifs(normalizedQuery);

    setRecentSearches(prev =>
      prev.includes(normalizedQuery) ? prev : [normalizedQuery, ...prev].slice(0, 6)
    );
  };

  const handleTermClicked = (term: string): void => {
    fetchGifs(term);
  };

  return {
    gifs,
    recentSearches,
    isLoading,
    error,
    handleSearch,
    handleTermClicked,
  };
};
