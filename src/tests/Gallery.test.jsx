import { fireEvent, render, screen } from "@testing-library/react";

import { describe, it, expect, vitest, vi, beforeEach } from "vitest";
import { fakeStore } from "../mocks/copiedObj";
import Gallery from '../components/Gallery.jsx'
import { renderWithCartContext, mockCartContext } from "./mockContext/mockContext";


describe('Gallery functions correctly', () => {

    it('gallery renders correctly', () => {
        const { asFragment } = renderWithCartContext(
            <Gallery />,
            mockCartContext
          );
          expect(asFragment()).toMatchSnapshot();
      
    })
})