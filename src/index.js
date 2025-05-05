import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { User } from './components/User/User';
import { Github, githubInfoLoader } from './components/Github/Github';
import './index.css'; 
//can import all componnets from ./comp by putting everything in an index file ?

/*
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
      },
      {
        path: "contact", 
        element: <Contact/>
      }
    ] //to add children later, like home etc
  }
])
//method which has an array, put a list of all onjects we nee inside the array
*/

//another way to mention/create routes and render
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='about' element={<About/>} />
      <Route path='user/:userid' element={<User/>} /> 
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>} /> 
    </Route>
  )
)
//userid can change sites in a main layout
//we can access the id from it's component, here User.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);
//RouterProvider takes a prop


//main jsx
//we not using app.js here, this file index or main is the maine file .js

//documentation of router https://reactrouter.com/en/main/start/overview 