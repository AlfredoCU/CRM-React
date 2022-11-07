import { redirect } from "react-router-dom";

import rgxEmail from "./rgxEmail";
import { createCustomer, editCustomer } from "../services/dataFake";

const createOrEditCustomerAction = async ({ request, params }) => {
  try {
    const errors = [];

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    if (Object.values(data).includes("")) {
      errors.push("Todos los campos son obligatorios");
    }

    if (!rgxEmail.test(formData.get("email"))) {
      errors.push("El formato del correo no es valido");
    }

    if (Object.keys(errors).length) {
      return errors;
    }

    if (params.id) {
      await editCustomer(params.id, data);
    } else {
      await createCustomer(data);
    }

    return redirect("/");
  } catch (error) {
    console.error("CREATE_OR_EDIT_CUSTOMER_ACTION", error);
  }
};

export default createOrEditCustomerAction;
