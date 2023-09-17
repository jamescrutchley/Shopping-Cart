import { fireEvent, render, screen } from "@testing-library/react";
import ProductRow from "../components/ProductRow.jsx";
import { fakeStore } from "../mocks/copiedObj";
import { describe, it, expect, vitest, vi, beforeEach } from "vitest";
import { mockCartContext, renderWithCartContext } from "./mockContext/mockContext";

const mockFunc = vi.fn();

describe('productcontrols functions correctly', () => {
    beforeEach(() => renderWithCartContext(<ProductRow showNumber={5} />, mockCartContext ))

    it('loading displayed before data fetched', () => {
        expect(screen.getByRole('status')).toBeInTheDocument();
    })

})