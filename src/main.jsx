import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AddProduct from './Components/AddProduct/AddProduct';
import Signin from './Components/Signin/Signin';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Samsung from './Components/AllData/Samsung';
import Apple from './Components/AllData/Apple/Apple';
import Details2 from './Components/Details/Details2';
import Sony from './Components/AllData/Sony/Sony';
import Details3 from './Components/Details/Details3';
import Details1 from './Components/Details/Details1';
import Huawei from './Components/AllData/Huawei/Huawei';
import Details4 from './Components/Details/Details4';
import Details5 from './Components/Details/Details5';
import Google from './Components/AllData/Google/Google';
import Details6 from './Components/Details/Details6';
import Xiomi from './Components/AllData/Xiomi/Xiomi';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddSony from './Components/AddProduct/AddSony';
import AddHuawei from './Components/AddProduct/AddHuawei';
import AddApple from './Components/AddProduct/AddApple';
import AddGoogle from './Components/AddProduct/AddGoogle';
import AddXiomi from './Components/AddProduct/AddXiomi';
import MyCart from './Components/MyCart/MyCart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement :<ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/signup",
        element : <Signup></Signup>
      },
      {
        path : "/myCart",
        element : <MyCart></MyCart>
      },
      {
        path : "/signin",
        element : <Signin></Signin>
      },
      {
        path : "/addProduct",
        element : <AddProduct></AddProduct>
      },
      {
        path : "/addSony",
        element : <AddSony></AddSony>
      },
      {
        path : "/addHuawei",
        element : <AddHuawei></AddHuawei>
      },
      {
        path : "/addApple",
        element : <AddApple></AddApple>
      },
      {
        path : "/addGoogle",
        element : <AddGoogle></AddGoogle>
      },
      {
        path : "/addXiomi",
        element : <AddXiomi></AddXiomi>
      },
      {
        path : "/details1/:_id",
        element : <PrivateRoute><Details1></Details1></PrivateRoute>,
        loader : () => fetch('https://brand-shop-side-server.vercel.app/samsungData')
      },
      {
        path : "/appledetails/:_id",
        element : <Details2></Details2>,
        loader : () => fetch('https://brand-shop-side-server.vercel.app/appleData')
      },
      {
        path : "/sonyDetails/:_id",
        element : <Details3></Details3>,
        loader : () => fetch('https://brand-shop-side-server.vercel.app/sonyData')
      },
      {
        path : "/huaweiDetails/:_id",
        element : <Details4></Details4>,
        loader : () => fetch('https://brand-shop-side-server.vercel.app/huaweiData')
      },
      {
        path : "/googleDetails/:_id",
        element : <Details5></Details5>,
        loader : () => fetch('https://brand-shop-side-server.vercel.app/googleData')
      },
      {
        path : "/xiomiDetails/:_id",
        element : <Details6></Details6>,
        loader : () => fetch('https://brand-shop-side-server.vercel.app/xiomiData')
      },
      {
        path : "/samsung",
        element : <Samsung></Samsung>
      },
      {
        path : "/apple",
        element : <Apple></Apple>
      },
      {
        path : "/sony",
        element : <Sony></Sony>
      },
      {
        path : "/huawei",
        element : <Huawei></Huawei>
      },
      {
        path : "/google",
        element : <Google></Google>
      },
      {
        path : "/xiomi",
        element : <Xiomi></Xiomi>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
