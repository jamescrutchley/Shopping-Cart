import { fireEvent, render, screen } from "@testing-library/react";
import SearchProducts from "../components/SearchProducts.jsx";
import { describe, it, expect, vitest, vi, beforeEach } from "vitest";

const mockFunc = vi.fn();

describe('Product functions correctly', () => {
    beforeEach(() => render(<SearchProducts handleSubmit={mockFunc} searchTerms={['dog']}/>))

    it('renders correctly', () => {
        expect(screen.getByRole('search')).toBeInTheDocument();
    })
    it('handleSubmit runs', () => {
        let button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockFunc).toHaveBeenCalled();
    })
})