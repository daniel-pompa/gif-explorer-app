import { giphyAPI } from '../api/giphy.api';
import { logger } from '../../utils/logger';
import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';

const GIF_LIMIT = 20;

/** Maps Giphy API response to domain Gif entity. */
const mapGiphyToGif = (gif: GiphyResponse['data'][number]): Gif => ({
  id: gif.id,
  title: gif.title,
  url: gif.images.original.url,
  width: Number(gif.images.original.width),
  height: Number(gif.images.original.height),
});

/** Fetch gifs by search query. */
export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) return [];

  try {
    const response = await giphyAPI.get<GiphyResponse>('/search', {
      params: {
        q: trimmedQuery,
        limit: GIF_LIMIT,
      },
    });

    return response.data.data.map(mapGiphyToGif);
  } catch (error) {
    logger.error(error, {
      scope: 'getGifsByQuery',
      metadata: { query: trimmedQuery },
    });

    return [];
  }
};
