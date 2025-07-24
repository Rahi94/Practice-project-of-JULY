import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './layout/Main.jsx';
import Header from './Components/header/Header.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/header/home/Home.jsx';
import Login from './Components/login/Login.jsx';
import Register from './Components/register/Register.jsx';
import SignUp from './Components/signUp/SignUp.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path:"signUp",
        element: <SignUp></SignUp>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
