import CartContext from '../context/CartContext'; 
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CartPanel from '../components/CartPanel';
import { renderWithCartContext, mockCartContext } from './mockContext/mockContext';


import { describe, it, expect, vitest, vi, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { fakeStore } from "../mocks/copiedObj.js";


  const callBack = vi.fn();

describe('CartPanel behaves correctly', () => {

    it('panel renders', () => {
        const { asFragment } = renderWithCartContext(
            <CartPanel clickBack={callBack} />,
            mockCartContext
          );
          expect(asFragment()).toMatchSnapshot();
      
    })
    it('renders right number of cartcard items', () => {
        renderWithCartContext(
            <CartPanel clickBack={callBack} />,
            mockCartContext
          );

          const cartItems = screen.getAllByTestId('card');
      
          expect(cartItems).toHaveLength(4);
    })

    //trigger useClickAway hook?

    // it('clickaway fires', async () => {
    //     renderWithCartContext(
    //         <CartPanel clickBack={callBack} />,
    //         mockCartContext
    //       );
    //     const wrapper = screen.getByTestId('panel-wrapper');
    //     expect(wrapper).toBeInTheDocument();
    //     await waitFor(() => {
    //         expect(callBack).toHaveBeenCalled();
    //     })
    // })
})