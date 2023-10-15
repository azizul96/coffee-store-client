import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './pages/Home';
import AddCoffee from './component/AddCoffee';
import UpdateCoffee from './component/UpdateCoffee';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AuthProvider from './context/AuthProvider';
import Users from './pages/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('https://coffee-store-server-7m7u12x91-azizul96s-projects.vercel.app/coffee/')
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`https://coffee-store-server-7m7u12x91-azizul96s-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=> fetch('https://coffee-store-server-7m7u12x91-azizul96s-projects.vercel.app/user')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
