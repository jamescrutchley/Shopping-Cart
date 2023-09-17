import { vi } from "vitest";
import {render} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { fakeStore } from "../../mocks/copiedObj";

const renderWithCartContext = (component, cartContextValue) => {
    return render(
      <BrowserRouter>
        <CartContext.Provider value={cartContextValue}>
          {component}
        </CartContext.Provider>
      </BrowserRouter>
    );
  };
  
  // a fake value for the context:
const mockCartContext = {
    cartArray: fakeStore.slice(0, 4), 
    addToCart: vi.fn(), 
  };

  export { renderWithCartContext, mockCartContext };
