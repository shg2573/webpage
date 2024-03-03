import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './Component/Home';
import About from './Component/About';
import ContactUs from './Component/ContactUs';
import User from './Component/User';
import Github, { githubInfoLoader } from './Component/Github';

/*const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {path:'',
       element:<Home/>},
      {path:'about',
       element:<About/>}
    ]
  }
])*/
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<ContactUs/>}/>
        <Route path="user/:userid" element={<User/>}/>
        <Route loader={githubInfoLoader} path="github" element={<Github/>}/>
      </Route>
    </Route>
  )
)
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
