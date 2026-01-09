import { describe, test, expect } from 'vitest';
import { giphyAPI } from './giphy.api';

describe('Giphy API Configuration', () => {
  test('should be configured with the correct base URL', () => {
    expect(giphyAPI.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
  });

  test('should have default params configured (lang and api_key)', () => {
    const { params } = giphyAPI.defaults;

    expect(params.lang).toBe('en');

    // This checks if the env variable is being read correctly
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    /**
     * @note Using toStrictEqual ensures the object matches exactly,
     * including structure and property types, preventing unexpected side effects.
     */
    expect(params).toStrictEqual({
      lang: 'en',
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });

  test('should use axios instance', () => {
    /** @description Verify that the exported object is a fully initialized Axios instance. */
    expect(giphyAPI.interceptors).toBeDefined();
    expect(typeof giphyAPI.get).toBe('function');
  });
});
