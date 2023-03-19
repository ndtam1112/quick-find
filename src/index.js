import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import "./index.css";
import ViewCoupon from "./Presentation/View/Coupon/ViewCoupon";
import ViewHospital from './Presentation/View/Hospital/ViewHospital'
import ViewManagerDriver from "./Presentation/View/ManagerDriver/ViewManagerDriver";
import ViewServiceCenter from "./Presentation/View/ServiceCenter/ViewServiceCenter";
import ViewManagerService from "./Presentation/View/ManagerService/ViewManagerService";
import ViewManagerOrder from "./Presentation/View/ManagerOrder/ViewManagerOrder";
import ViewHome from "./Presentation/View/Home/ViewHome.jsx";
import Login from './Presentation/View/Login'
import SignUp from "./Presentation/View/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewHome/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quan-ly-benh-vien",
    element: <ViewHospital />,
  },
  {
    path: "/quan-ly-trung-tam",
    element: <ViewServiceCenter />,
  },
  {
    path: "/quan-ly-tai-xe",
    element: <ViewManagerDriver />,
  },
  {
    path: "/quan-ly-phieu-giam-gia",
    element: <ViewCoupon />,
  },
  {
    path: "/quan-ly-dich-vu",
    element: <ViewManagerService />,
  },
  {
    path: "/quan-ly-tai-xe",
    element: <ViewManagerDriver />,
  },
  {
    path: "/quan-ly-chuyen-xe",
    element: <ViewManagerOrder />,
  },
  {
    path: "/dang-nhap",
    element: <Login />,
  },
  {
    path: "/dang-ky",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
