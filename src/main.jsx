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
import Error from './components/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        loader: () => fetch('https://auto-trader-server-pbif25ges-arman-hossains-projects.vercel.app/cars')
      },
      {
        path: 'details/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://auto-trader-server-pbif25ges-arman-hossains-projects.vercel.app/cars/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <PrivateRoutes><UpdateDetails></UpdateDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://auto-trader-server-pbif25ges-arman-hossains-projects.vercel.app/cars/${params.id}`)
      },
      {
        path: '/cart',
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
        loader: () => fetch('https://auto-trader-server-pbif25ges-arman-hossains-projects.vercel.app/cart')
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
