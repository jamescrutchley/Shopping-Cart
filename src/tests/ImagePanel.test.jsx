import { screen } from "@testing-library/react";

import { describe, it, expect, vitest, vi, beforeEach } from "vitest";
import ImagePanel from '../components/ImagePanel.jsx'
import { renderWithCartContext, mockCartContext } from "./mockContext/mockContext";

const mockFunc = vi.fn();

describe('Gallery functions correctly', () => {
    beforeEach(() => {
        renderWithCartContext(
            <ImagePanel clickBack={mockFunc} img={null} description={'description'} />,
            mockCartContext
          );
    })
    it('image displays', () => {
        expect(screen.getByRole('img')).toBeInTheDocument;
    })
    it('description displays', () => {
        expect(screen.getByRole('paragraph')).toBeInTheDocument;
        expect(screen.getByRole('paragraph')).toHaveTextContent('description');
    })
})