import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Contect from "../components/Navber/Contect";
import About from "../components/Navber/About";
import Login from "../components/SignIn/Login";
import Register from "../components/SignIn/Register";
import Private from "../components/PrivateRoute/Private";
import Error from "./Error";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Login/>
         },
        {
          path: '/home',
          element: <Home/>
        },
       {
        path: '/contect',
        element: <Private><Contect/></Private>
       },
       {
        path: '/about',
        element: <Private><About/></Private>
       },
       {
        path: '/register',
        element: <Register/>
       }
      ]
    },
  ]);

export default routes;