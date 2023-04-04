import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css'

import Root from './routes/root'
import ItemRoot from './routes/item'
import { CustomProvider } from '../src/context/index';

import Layout from './components/Layout'
import Cart from './components/Cart';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhBoQVxlmM6lm0Sfm9pplrYQxCl0eKK1o",
  authDomain: "proyecto-react-coderhous-72576.firebaseapp.com",
  projectId: "proyecto-react-coderhous-72576",
  storageBucket: "proyecto-react-coderhous-72576.appspot.com",
  messagingSenderId: "124400284240",
  appId: "1:124400284240:web:c0853b56367f4ee1bf5755"
};

initializeApp(firebaseConfig);

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
