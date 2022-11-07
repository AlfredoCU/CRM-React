import { redirect } from "react-router-dom";

import { deleteCustomer } from "../services/dataFake";

const deleteCustomerAction = async ({ params }) => {
  try {
    await deleteCustomer(params.id);
    return redirect("/");
  } catch (error) {
    console.error("DELETE_CUSTOMER_ACTION", error);
  }
};

export default deleteCustomerAction;
