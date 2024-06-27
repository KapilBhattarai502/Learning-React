import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home.jsx';
import GithubUser from './pages/GithubUser.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/github",
    element:<GithubUser/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

       <RouterProvider router={router} />
  
)
