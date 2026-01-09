import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchHistory } from './SearchHistory';

describe('SearchHistory Component', () => {
  const mockOnSelectTerm = vi.fn();
  const mockSearches = ['Goku', 'Dragon Ball Z', 'Ninja Scroll'];

  test('should return null (render nothing) when searches array is empty', () => {
    const { container } = render(
      <SearchHistory searches={[]} onSelectTerm={mockOnSelectTerm} />
    );

    // When a component returns null, the container should be empty
    expect(container.firstChild).toBeNull();

    // Check that the heading is not in the document
    const heading = screen.queryByRole('heading', { name: /recent searches/i });
    expect(heading).toBeNull();
  });

  test('should render the list of searches correctly', () => {
    render(<SearchHistory searches={mockSearches} onSelectTerm={mockOnSelectTerm} />);

    const title = screen.getByRole('heading', { level: 2, name: /recent searches/i });
    expect(title).toBeDefined();

    // Verify all terms are rendered as buttons
    mockSearches.forEach(term => {
      const button = screen.getByRole('button', { name: term });
      expect(button).toBeDefined();
    });

    // Verify the list structure
    const list = screen.getByRole('list'); // <ul>
    expect(list.children).toHaveLength(mockSearches.length);
  });

  test('should call onSelectTerm with the correct value when a button is clicked', () => {
    render(<SearchHistory searches={mockSearches} onSelectTerm={mockOnSelectTerm} />);

    const targetTerm = mockSearches[1];
    const button = screen.getByRole('button', { name: targetTerm });

    fireEvent.click(button);

    expect(mockOnSelectTerm).toHaveBeenCalledTimes(1);
    expect(mockOnSelectTerm).toHaveBeenCalledWith(targetTerm);
  });

  test('should have the correct CSS classes for styling', () => {
    const { container } = render(
      <SearchHistory searches={mockSearches} onSelectTerm={mockOnSelectTerm} />
    );

    const section = container.querySelector('section');
    const list = container.querySelector('ul');

    expect(section?.className).toBe('search-history');
    expect(list?.className).toBe('search-history-list');
  });
});
