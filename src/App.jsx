import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/app.css";
import Layout from "./components/Layout";

import ErrorPage from "./pages/ErrorPage";
import Customers from "./pages/Customers";
import NewCustomer from "./pages/NewCustomer";
import EditCustomer from "./pages/EditCustomer";

import { getCustomers } from "./services/dataFake";
import getCustomerLoader from "./helpers/getCustomerLoader";
import deleteCustomerAction from "./helpers/deleteCustomerAction";
import createOrEditCustomerAction from "./helpers/createOrEditCustomerAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Customers />,
        loader: getCustomers,
        errorElement: <ErrorPage />,
      },
      {
        path: "/customer/new",
        element: <NewCustomer />,
        action: createOrEditCustomerAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/customer/:id/edit",
        element: <EditCustomer />,
        loader: getCustomerLoader,
        action: createOrEditCustomerAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/customer/:id/delete",
        action: deleteCustomerAction,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
