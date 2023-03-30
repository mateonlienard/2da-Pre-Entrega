import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css'

import Root from './routes/root'
import ItemRoot from './routes/item'
import { CustomProvider } from './context';

import Layout from './components/Layout'
import Cart from './components/Cart';

const router = createBrowserRouter([
  {element: <Layout />, children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '/category/:id',
        element: <Root />,
      },
      {
        path: '/item/:id',
        element: <ItemRoot />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <div>hola</div>,
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
        <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>,
)
