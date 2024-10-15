import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CreditsPage from "./CreditsPage.jsx";
import HomePage from "./HomePage.jsx";
import ProductPage from "./ProductPage.jsx";

const categories = ['Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip Liner', 'Lipstick', 'Mascara', 'Nail polish'];
// using JSON from https://makeup-api.herokuapp.com/
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/products/:type",
                loader: async ({request, params }) => {

                    return fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${params.type}`)
                },
                element: <ProductPage />
            },
            {
                path: "/credits",
                element: <CreditsPage/>,
            },
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
