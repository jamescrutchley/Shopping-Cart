import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "./ErrorPage";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/home',
            element: <>home</>,
        },
        {
            path: '/shop',
            element: <>shop</>
        }
    ])
    return <RouterProvider router={router} />;
  };
  
  export default Router;