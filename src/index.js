import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Products from './features/products/products';
import Manager from './features/manager/manager';
import Agent from './features/agent/agent';
import Customer from './features/customer/customer';
import AgentForm from './features/agent/agentform';
import Managerhome from './features/manager/managerHome';
import Agenthome from './features/agent/agentHome';
import Downpayment from './features/agent/agent down';
import CustomerHome from './features/customer/customerHome';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/manager",
        element:<Manager></Manager>,
        children:[
          {
            path:"/manager/",
            element:<Managerhome></Managerhome>
          }
        ]


      },
      {
        path:"/agent",
        element:<Agent></Agent>,
        children:[
          {
            path:"/agent/",
            element:<Agenthome></Agenthome>
          },
          {
            path:"/agent/agentform",
            element:<AgentForm></AgentForm>
          },
          {
            path:"/agent/downpayment",
            element:<Downpayment></Downpayment>
          }
        ]

      },
      {
        path:"/customer",
        element:<Customer></Customer>,
        children:[
          {
            path:`/customer/`,
            element:<CustomerHome></CustomerHome>
        }
      ]

      },
      
    
    {
      path:"/products",
      element:<Products></Products>
    }
  ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
