import { fireEvent, render, screen } from "@testing-library/react";
import {
  renderWithCartContext,
  mockCartContext,
} from "./mockContext/mockContext.jsx";

import { describe, it, expect, vitest, vi, beforeEach } from "vitest";
import { fakeStore } from "../mocks/copiedObj.js";

import SearchButton from "../components/SearchButton";
import CartButton from "../components/CartButton";
import QuantityControls from "../components/QuantityControls";
import ClickableInput from "../components/ClickableInput";
import SortBy from "../components/SortBy.jsx";
import ToggleTheme from "../components/ToggleTheme.jsx";
import userEvent from "@testing-library/user-event";

const mockFunc = vi.fn();

describe("Buttons and similar function correctly", () => {
  it("searchbutton functions correctly", () => {
    render(<SearchButton onClick={mockFunc} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    fireEvent.click(button);
    expect(mockFunc).toHaveBeenCalled();
  });
  it("cartbutton functions correctly", () => {
    renderWithCartContext(<CartButton onClick={mockFunc} />, mockCartContext);
    const button = screen.getByRole("status");
    expect(button).toBeInTheDocument;
    fireEvent.click(button);
    expect(mockFunc).toHaveBeenCalled();
  });
  it("quantitycontrols function correctly", () => {
    renderWithCartContext(
      <QuantityControls inCart={4} onChange={mockFunc} data={fakeStore[0]} />,
      mockCartContext
    );
    const label = screen.getByLabelText("Qty:");
    expect(label).toBeInTheDocument;
    fireEvent.click(label);
    expect(mockFunc).toHaveBeenCalled();
    const input = screen.getByDisplayValue(4);
    expect(input).toHaveValue("4");
  });
  it("clickable input functions correctly", () => {
    render(
      <ClickableInput
        onChange={mockFunc}
        onClick={mockFunc}
        onBlur={mockFunc}
        value={3}
        type="quantity"
        min={1}
        max={9}
      />
    );
    let input = screen.getByDisplayValue("3");
    expect(input).toBeInTheDocument;
  });
  it("sortby functions correctly", () => {
    render(<SortBy handleSelect={mockFunc} />);
    let select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument;
    //select an option and ensure it's marked as selected.
    const ascending = screen.getByRole("option", { name: "Price Ascending" });
    userEvent.selectOptions(select, ascending);
    expect(ascending.selected).toBe(true);
  });
  it("toggletheme functions correctly", () => {
    render(<ToggleTheme onClick={mockFunc} />);
    let toggle = screen.getByRole("button");
    expect(toggle).toBeInTheDocument;
    fireEvent.click(toggle);
    expect(mockFunc).toHaveBeenCalled();
  });
});
