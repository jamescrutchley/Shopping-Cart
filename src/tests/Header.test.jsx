import { render, screen } from '@testing-library/react';
import Header from '../components/Header.jsx'
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';


describe('Header', () => {
    it('renders header', () => {
      render(
        <BrowserRouter>
              <Header />
        </BrowserRouter>);
      const headline = screen.getByText(/Consumer Goods/i);
      expect(headline).toBeInTheDocument();
    });
  });