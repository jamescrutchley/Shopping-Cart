import { fireEvent, render, screen } from "@testing-library/react";
import Product from "../components/Product.jsx";
import { fakeStore } from "../mocks/copiedObj";
import { describe, it, expect, vitest, vi, beforeEach } from "vitest";
import { mockCartContext, renderWithCartContext } from "./mockContext/mockContext";

const mockFunc = vi.fn();

describe('Product functions correctly', () => {
    beforeEach(() => renderWithCartContext(<Product data={fakeStore[0]} isInCart={true} addToCart={mockFunc}/>, mockCartContext ))

    it('product renders correctly', () => {
        expect(screen.getByRole('article')).toBeInTheDocument();
    })
    it('image displays', () => {
        expect(screen.getByAltText('product image')).toBeInTheDocument
    })
    it('product data reflected', async () => {
        const title = await screen.findByDisplayValue('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
        expect(title).toBeInTheDocument;
        expect(screen.getByDisplayValue('109.95')).toBeInTheDocument;
    })
})