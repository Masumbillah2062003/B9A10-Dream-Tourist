import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Component/Error";
import Home from "../Pages/Home";
import AllTourists from "../Component/AllTourists";
import AddTourists from "../Component/AddTourists";
import MyList from "../Component/MyList";
import Login from "../Component/Login";
import Register from "../Component/Register";
import TourDetails from "../Component/TourDetails";
import PrivateRoute from "./PrivateRoute";

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
        path: "/data/:id",
        element: <PrivateRoute><TourDetails></TourDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
        path: "/allTourists",
        element: <AllTourists></AllTourists>
      },
      {
        path: "/addTourists",
        element: <PrivateRoute><AddTourists></AddTourists></PrivateRoute>
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
