import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "./Pages/Layout/MainLayout";
import Home from "./Pages/Home/Home";
import AddProduct from "./Pages/AddProduct/AddProduct";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
   
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
       
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        }
   
       
      ]
    },
  ]);

export default router;