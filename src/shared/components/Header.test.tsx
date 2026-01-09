import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
  const mockData = {
    title: 'GIFs Explorer App',
    description: 'The best place to find your favorite GIFs.',
  };

  test('should render the title as an H1 element', () => {
    render(<Header title={mockData.title} />);

    const titleElement = screen.getByRole('heading', { level: 1 });

    expect(titleElement.textContent).toBe(mockData.title);
    expect(titleElement.className).toContain('inter-bold');
  });

  test('should render the description when provided', () => {
    render(<Header title={mockData.title} description={mockData.description} />);

    const descriptionElement = screen.getByText(mockData.description);

    expect(descriptionElement).toBeDefined();
    expect(descriptionElement.tagName).toBe('P');
    expect(descriptionElement.className).toContain('inter-light');
  });

  test('should NOT render description when prop is missing', () => {
    render(<Header title={mockData.title} />);

    const descriptionElement = screen.queryByText(mockData.description);

    expect(descriptionElement).toBeNull();
  });

  test('should have the correct container class', () => {
    const { container } = render(<Header title={mockData.title} />);
    const headerTag = container.querySelector('header');

    expect(headerTag?.className).toContain('content-center');
  });
});
