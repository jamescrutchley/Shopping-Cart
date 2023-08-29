import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import AboutPage from "./AboutPage";
import ShoppingPage from "./ShoppingPage";
import Featured from "../components/Featured";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '',
                    element: <Featured />
                },
                {
                    path: 'about',
                    element: <AboutPage />,
                },
                {
                    path: 'shop',
                    element: <ShoppingPage />,
                }
            ]
        },

    ])
    return <RouterProvider router={router} />;
  };
  
  export default Router;