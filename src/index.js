import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import "./index.css";
import ViewHospital from './Presentation/View/Hospital/ViewHospital'
import ViewServiceCenter from "./Presentation/View/ServiceCenter/ViewServiceCenter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
