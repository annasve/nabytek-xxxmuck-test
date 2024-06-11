import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

//importy pro const router
import { App } from './App.jsx';
import { HomePage } from './components/HomePage/HomePage.jsx';
import { ProductPage } from './components/ProductPage/ProductPage.jsx';

//---router config
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/product/:productId', element: <ProductPage /> },
    ],
  },
]);

//---render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
