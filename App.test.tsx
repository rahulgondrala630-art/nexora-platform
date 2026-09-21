import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Nexora dashboard', () => {
  it('renders the product overview and workstream signals', () => {
    render(<App />);
    expect(screen.getByText('Good morning, Rahul')).toBeInTheDocument();
    expect(screen.getByText('Workspace onboarding')).toBeInTheDocument();
    expect(screen.getByText('Decisions captured')).toBeInTheDocument();
  });
});
