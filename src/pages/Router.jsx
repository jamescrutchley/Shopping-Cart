import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
        }
    ])
    return <RouterProvider router={router} />;
  };
  
  export default Router;