import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyAPI } from '../api/giphy.api';
import { getGifsByQuery } from './get-gifs-by-query.action';
import { giphySearchResponseMock } from '../../../tests/mocks/giphy.response.data';
import { logger } from '../../utils/logger';

describe('getGifsByQuery Action', () => {
  let mock: AxiosMockAdapter;

  beforeEach(() => {
    mock = new AxiosMockAdapter(giphyAPI);
  });

  afterEach(() => {
    mock.restore();
    vi.restoreAllMocks();
  });

  test('should return an array of gifs', async () => {
    mock.onGet('/search').reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery('Goku');

    expect(Array.isArray(gifs)).toBe(true);
    expect(gifs.length).toBe(8);

    gifs.forEach(gif => {
      expect(typeof gif.id).toBe('string');
      expect(typeof gif.title).toBe('string');
      expect(typeof gif.url).toBe('string');
      expect(typeof gif.width).toBe('number');
      expect(typeof gif.height).toBe('number');
    });
  });

  test('should return an empty array when query is empty', async () => {
    const gifs = await getGifsByQuery('');

    expect(gifs).toEqual([]);
  });

  test('should return empty array when query consists only of whitespaces', async () => {
    const gifs = await getGifsByQuery('   ');

    expect(gifs).toEqual([]);
  });

  test('should log error and return empty array on API failure', async () => {
    const loggerSpy = vi.spyOn(logger, 'error').mockImplementation(() => {});

    mock.onGet('/search').reply(400, {
      message: 'Bad request',
    });

    const gifs = await getGifsByQuery('Goku');

    expect(gifs).toEqual([]);
    expect(loggerSpy).toHaveBeenCalledTimes(1);
    expect(loggerSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        scope: 'getGifsByQuery',
      })
    );
  });
});
