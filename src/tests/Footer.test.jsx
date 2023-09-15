import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer.jsx'
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';


describe('Footer', () => {
    it('renders footer', () => {
      render(
        <BrowserRouter>
              <Footer />
        </BrowserRouter>);
          screen.debug();
    });
  });