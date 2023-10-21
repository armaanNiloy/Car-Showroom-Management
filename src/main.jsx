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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: 'brand/:id',
        element: <Brand></Brand>,
        loader: ()=>fetch('http://localhost:5000/cars')
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: ({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <UpdateDetails></UpdateDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: ()=> fetch('http://localhost:5000/cart')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
