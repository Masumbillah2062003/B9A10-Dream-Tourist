import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Component/Error";
import Home from "../Pages/Home";
import AllTourists from "../Component/AllTourists";
import AddTourists from "../Component/AddTourists";
import MyList from "../Component/MyList";
import Login from "../Component/Login";
import Register from "../Component/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("http://localhost:5000/assignment")
      },
      {
        path: "/allTourists",
        element: <AllTourists></AllTourists>
      },
      {
        path: "/addTourists",
        element: <AddTourists></AddTourists>
      },
      {
        path: "/mylist",
        element: <MyList></MyList>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router;
