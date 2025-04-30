import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './components/Home/Home';
import { About } from './components/About/About';
import './index.css'; 


const router = createBrowserRouter([
  {
    path: '/',  
    element: <Layout/>,
    //mentioned layout to be rendered
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about", //we can decide path //after slash "/"
        element: <About/>
      }
    ] //to add children later, like home etc
  }
])
//method which has an array, put a list of all onjects we nee inside the array

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);
//RouterProvider takes a prop


//main jsx