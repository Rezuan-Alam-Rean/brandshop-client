import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../../../layout/Main/MainLayout";
import AddProduct from "../../AddProducts/AddProduct";
import Home from "../../Home/Home/Home";
import Login from "../../Home/Login/Login";
import Registration from "../../Home/Registration/Registration";
import MyCart from "../../MyCart/MyCart";




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
            path:'/MyCart',
            element:<MyCart></MyCart>
        },
      
        {
          path:'/login',
          element:<Login></Login>
      },
      {
          path:'/register',
          element:<Registration></Registration>
      },
   
       
      ]
    },
  ]);

export default router;