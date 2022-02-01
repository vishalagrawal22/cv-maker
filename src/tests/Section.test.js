import { Section } from '../components/Section';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Section component tests', () => {
  test('adds header with appropiate text to display', () => {
    render(<Section header="Test Header" />);
    expect(screen.getByText(/test header/i)).toBeInTheDocument();
  });

  test('adds children to display', () => {
    render(
      <Section header="Test Header">
        <li>child list item 1</li>
        <li>child list item 2</li>
      </Section>
    );
    expect(screen.getByText(/test header/i)).toBeInTheDocument();
    expect(screen.getByText(/child list item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child list item 2/i)).toBeInTheDocument();
  });
});
