import { render, screen } from "@testing-library/react";
import Nav from '../components/Nav';
import { renderWithCartContext, mockCartContext } from './mockContext/mockContext';


import { describe, it, expect, vitest, vi, beforeEach } from "vitest";


  const callBack = vi.fn();

describe('Nav functions correctly', () => {
    beforeEach(() => {
        renderWithCartContext(
            <Nav clickBack={callBack} />,
            mockCartContext
          );
    })
    it('renders correctly', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    })
    it('cartButton badge displays correctly', () => {
        const badgeValue = screen.getByRole('badgeValue');
        expect(badgeValue).toHaveTextContent('4');
    })
})