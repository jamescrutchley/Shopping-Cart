import { fireEvent, render, screen } from "@testing-library/react";
import ProductControls from "../components/ProductControls.jsx";
import { fakeStore } from "../mocks/copiedObj";
import { describe, it, expect, vitest, vi, beforeEach } from "vitest";
import { mockCartContext, renderWithCartContext } from "./mockContext/mockContext";

const mockFunc = vi.fn();

describe('productcontrols functions correctly', () => {
    beforeEach(() => renderWithCartContext(<ProductControls data={fakeStore[0]} isInCart={4} />, mockCartContext ))

    it('renders correctly', () => {
        expect(screen.getByRole('region')).toBeInTheDocument();
    })
    it('quantity correct', () => {
        const label = screen.getByLabelText("Qty:");
        expect(label).toBeInTheDocument;
        expect(label).toHaveValue('4')
    })
    it('button disabled if display value and cart value in sync', () => {
        expect(screen.getByRole('button', { name: 'Update Cart'})).toBeDisabled();
    })
    // it('product data reflected', () => {
    //     expect(screen.getByDisplayValue('Fjallraven')).toBeInTheDocument;
    //     expect(screen.getByDisplayValue('109.95')).toBeInTheDocument;
    // })
})