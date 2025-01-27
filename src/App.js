import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import './App.css';
import Footer from './Footer';
import Router from './Router';


function App() {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
