import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar Component', () => {
  const onQueryMock = vi.fn();
  const placeholder = 'Search GIFs...';

  beforeEach(() => {
    vi.useFakeTimers(); // Mock timers for the debounce logic
    onQueryMock.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers(); // Cleanup
  });

  test('should update input value on change', () => {
    render(<SearchBar onQuery={onQueryMock} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Hommer Simpson' } });
    expect(input.value).toBe('Hommer Simpson');
  });

  test('should call onQuery after 1000ms (debounce)', () => {
    render(<SearchBar onQuery={onQueryMock} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Zelda' } });

    // Should not be called immediately
    expect(onQueryMock).not.toHaveBeenCalled();

    // Fast-forward time by 1000ms
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(onQueryMock).toHaveBeenCalledWith('Zelda');
    expect(onQueryMock).toHaveBeenCalledTimes(1);
  });

  test('should call onQuery and clear input when button is clicked', () => {
    render(<SearchBar onQuery={onQueryMock} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'Jubei Kibagami' } });
    fireEvent.click(button);

    expect(onQueryMock).toHaveBeenCalledWith('Jubei Kibagami');
    expect(input.value).toBe(''); // State management check
  });

  test('should call onQuery and clear input when Enter key is pressed', () => {
    render(<SearchBar onQuery={onQueryMock} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Goku' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(onQueryMock).toHaveBeenCalledWith('Goku');
    expect(input.value).toBe('');
  });

  test('should render with custom placeholder', () => {
    render(<SearchBar onQuery={onQueryMock} placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
  });
});
