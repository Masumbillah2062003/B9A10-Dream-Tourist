import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Component/Error";
import Home from "../Pages/Home";
import AllTourists from "../Pages/AllTourists";
import AddTourists from "../Pages/AddTourists";
import MyList from "../Pages/MyList";
import Login from "../Component/Login";
import Register from "../Component/Register";
import TourDetails from "../Component/TourDetails";
import PrivateRoute from "./PrivateRoute";
import Update from "../Component/Update";
import Country from "../Component/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("https://b9a10-assignment-server.vercel.app/assignment")
      },
      {
        path: "/data/:id",
        element: <PrivateRoute><TourDetails></TourDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://b9a10-assignment-server.vercel.app/assignment/${params.id}`)
      },
      {
        path: "/allTourists",
        element: <AllTourists></AllTourists>,
        loader: ()=> fetch("https://b9a10-assignment-server.vercel.app/assignment")
      },
      {
        path: "/addTourists",
        element: <PrivateRoute><AddTourists></AddTourists></PrivateRoute>
      },
      {
        path: "/mylist",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://b9a10-assignment-server.vercel.app/assignment/${params.id}`)
      }
      ,
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "/country/:country",
        element: <Country></Country>,
        loader: ({params}) => fetch(`https://b9a10-assignment-server.vercel.app/country/${params.country}`)
      }
    ]
  },
]);

export default router;
