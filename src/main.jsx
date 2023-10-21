import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import Brand from './components/Brand';
import Details from './components/Details';
import UpdateDetails from './components/UpdateDetails';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './provider/AuthProvider';
import PrivateRoutes from './components/PrivateRouter';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProduct',
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: 'brand/:id',
        element: <Brand></Brand>,
        loader: () => fetch('http://localhost:5000/cars')
      },
      {
        path: 'details/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <PrivateRoutes><UpdateDetails></UpdateDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: '/cart',
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/cart')
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
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
