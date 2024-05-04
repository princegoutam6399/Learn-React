import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import ErrorPage from './Pages/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoute = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/blog',
      element: <Blog/>
    },
    {
      path: 'blog/:id',
      element: <BlogDetails/>
    },
    {
      path: '*',
      element: <ErrorPage/>
    },
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
