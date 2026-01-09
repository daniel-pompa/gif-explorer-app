import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GifList } from './GifList';
import type { Gif } from '../interfaces/gif.interface';

describe('GifList Component', () => {
  const mockGifs: Gif[] = [
    {
      id: '1',
      title: 'Rick and Morty',
      url: 'https://rickandmorty.com/rick.gif',
      width: 500,
      height: 500,
    },
    {
      id: '2',
      title: 'Dragon Ball',
      url: 'https://dbz.com/goku.gif',
      width: 400,
      height: 300,
    },
  ];

  test('should render the correct number of gif cards', () => {
    render(<GifList gifs={mockGifs} />);

    // Check for the number of titles (h3) rendered
    const titles = screen.getAllByRole('heading', { level: 3 });
    expect(titles).toHaveLength(mockGifs.length);
  });

  test('should render gif information correctly (image, title, dimensions)', () => {
    render(<GifList gifs={mockGifs} />);

    const firstGif = mockGifs[0];

    // Check Image accessibility and source
    const img = screen.getByAltText(firstGif.title) as HTMLImageElement;
    expect(img.src).toBe(firstGif.url);

    // Check Title
    expect(screen.getByText(firstGif.title)).toBeDefined();

    // Check Dimensions format
    const dimensions = `${firstGif.width} x ${firstGif.height}`;
    expect(screen.getByText(dimensions)).toBeDefined();
  });

  test('should render an empty section when no gifs are provided', () => {
    const { container } = render(<GifList gifs={[]} />);

    // Ensure the container exists but has no children with 'gif-card' class
    const section = container.querySelector('section');
    expect(section).toBeDefined();
    expect(section?.children.length).toBe(0);
  });

  test('should have the correct CSS class for the grid container', () => {
    const { container } = render(<GifList gifs={mockGifs} />);
    const section = container.querySelector('section');

    expect(section?.className).toBe('gifs-container');
  });
});
