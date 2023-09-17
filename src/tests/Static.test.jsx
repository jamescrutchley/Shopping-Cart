import { render, screen } from "@testing-library/react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import About from "../components/About.jsx";
import CartCard from "../components/CartCard.jsx";
import Featured from "../components/Featured.jsx";
import SearchPanel from "../components/SearchPanel.jsx"

import { describe, it, expect, vitest, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { fakeStore } from "../mocks/copiedObj.js";
import {renderWithCartContext, mockCartContext } from './mockContext/mockContext.jsx'

//wrapper for components that use 'cartcontext':


//Capturing and testing snapshots of static components.

describe("Static components render correctly.", () => {
    
  it("header snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("footer snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("about snapshot", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("cartcard snapshot", () => {
    const { asFragment } = renderWithCartContext(
      <CartCard data={fakeStore[0]} />,
      mockCartContext
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("featured snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Featured />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("searchpanel snapshot", () => {
    const { asFragment } = render(<SearchPanel />);
    expect(asFragment()).toMatchSnapshot();
  })
});
