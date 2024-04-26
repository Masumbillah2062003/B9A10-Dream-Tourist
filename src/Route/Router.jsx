import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Component/Error";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
    ]
  },
]);

export default router;
