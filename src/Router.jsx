import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './Home';
import ProductGrid from './components/Products/ProductGrid';
import ProductDetails from './components/Products/ProductDetails';
import Footer from './Footer';


const AppLayout = () => {
    return (
      <div className="App">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <ProductGrid />,
        },
        {
          path: "product/:productId",
          element: <ProductDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  const Router = () => {    
    return <RouterProvider router={router} />;
  };

  export default Router;