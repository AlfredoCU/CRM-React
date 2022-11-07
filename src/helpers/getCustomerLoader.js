import { redirect } from "react-router-dom";

import { getCustomer } from "../services/dataFake";

const getCustomerLoader = async ({ params }) => {
  try {
    const data = await getCustomer(params.id);

    if (!data) {
      return redirect("/");
    }

    return data;
  } catch (error) {
    console.error("GET_CUSTOMER_LOADER", error);
  }
};

export default getCustomerLoader;
