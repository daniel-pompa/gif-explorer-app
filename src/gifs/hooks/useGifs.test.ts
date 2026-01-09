import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';
import { useGifs } from './useGifs';

/** Mock getGifsByQuery action */
vi.mock('../actions/get-gifs-by-query.action', () => ({
  getGifsByQuery: vi.fn(),
}));

const mockedGetGifsByQuery = vi.mocked(getGifsByQuery);

const mockGifs: Gif[] = [
  {
    id: '1',
    title: 'Goku',
    url: 'https://giphy.com/goku.gif',
    width: 200,
    height: 200,
  },
];

describe('useGifs hook', () => {
  // Silence console.error to avoid noisy output for expected API failures
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should initialize with empty state when localStorage is empty', () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs).toEqual([]);
    expect(result.current.recentSearches).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  test('should restore gifs and recent searches from localStorage', () => {
    localStorage.setItem('lastGifs', JSON.stringify(mockGifs));
    localStorage.setItem('recentSearches', JSON.stringify(['goku']));

    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs).toEqual(mockGifs);
    expect(result.current.recentSearches).toEqual(['goku']);
  });

  test('should fetch gifs and update state on search', async () => {
    mockedGetGifsByQuery.mockResolvedValueOnce(mockGifs);

    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('  Goku ');
    });

    expect(mockedGetGifsByQuery).toHaveBeenCalledTimes(1);
    expect(mockedGetGifsByQuery).toHaveBeenCalledWith('goku');

    expect(result.current.gifs).toEqual(mockGifs);
    expect(result.current.recentSearches).toEqual(['goku']);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  test('should not duplicate recent searches', async () => {
    mockedGetGifsByQuery.mockResolvedValue(mockGifs);

    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('goku');
      await result.current.handleSearch('Goku');
    });

    expect(result.current.recentSearches).toEqual(['goku']);
  });

  test('should use cached gifs and avoid extra API calls', async () => {
    mockedGetGifsByQuery.mockResolvedValue(mockGifs);

    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('goku');
      await result.current.handleSearch('goku');
    });

    expect(mockedGetGifsByQuery).toHaveBeenCalledTimes(1);
    expect(result.current.gifs).toEqual(mockGifs);
  });

  test('should handle API error gracefully', async () => {
    mockedGetGifsByQuery.mockRejectedValueOnce(new Error('API failure'));

    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('goku');
    });

    expect(result.current.gifs).toEqual([]);
    expect(result.current.error).toBe('Something went wrong while loading GIFs.');
    expect(result.current.isLoading).toBe(false);
  });

  test('should persist gifs and searches to localStorage', async () => {
    mockedGetGifsByQuery.mockResolvedValueOnce(mockGifs);

    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('goku');
    });

    expect(JSON.parse(localStorage.getItem('lastGifs')!)).toEqual(mockGifs);
    expect(JSON.parse(localStorage.getItem('recentSearches')!)).toEqual(['goku']);
  });

  test('handleTermClicked should trigger a search', async () => {
    mockedGetGifsByQuery.mockResolvedValueOnce(mockGifs);

    const { result } = renderHook(() => useGifs());

    await act(async () => {
      result.current.handleTermClicked('goku');
    });

    expect(mockedGetGifsByQuery).toHaveBeenCalledWith('goku');
    expect(result.current.gifs).toEqual(mockGifs);
  });

  test('should update gifs when searching different terms', async () => {
    const gokuGifs: Gif[] = [
      {
        id: '1',
        title: 'Goku',
        url: 'https://goku.gif',
        width: 200,
        height: 200,
      },
    ];

    const vegetaGifs: Gif[] = [
      {
        id: '2',
        title: 'Vegeta',
        url: 'https://vegeta.gif',
        width: 300,
        height: 300,
      },
    ];

    mockedGetGifsByQuery
      .mockResolvedValueOnce(gokuGifs)
      .mockResolvedValueOnce(vegetaGifs);

    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('goku');
    });

    expect(result.current.gifs).toEqual(gokuGifs);

    await act(async () => {
      await result.current.handleSearch('vegeta');
    });

    expect(result.current.gifs).toEqual(vegetaGifs);
    expect(mockedGetGifsByQuery).toHaveBeenCalledTimes(2);
  });
});
