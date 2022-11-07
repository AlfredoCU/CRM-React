import { shape, string, number } from "prop-types";
import { useNavigate, Form, useActionData } from "react-router-dom";

import Input from "./Input";
import Errors from "./Errors";

const FormCustomer = ({ data }) => {
  const navigate = useNavigate();
  const errors = useActionData();

  const onCancel = () => {
    navigate("/");
  };

  return (
    <Form method="post" noValidate className="w-3/4">
      <Input
        id="name"
        type="text"
        name="name"
        label="Nombre"
        defaultValue={data.name}
      />

      <Input
        id="company"
        type="text"
        name="company"
        label="Empresa (Ej. Google)"
        defaultValue={data.company}
      />

      <div className="grid md:grid-cols-2 md:gap-6">
        <Input
          id="email"
          type="email"
          name="email"
          label="E-mail"
          defaultValue={data.email}
        />

        <Input
          id="phone"
          type="tel"
          name="phone"
          label="Teléfono (331-456-7890)"
          defaultValue={data.phone}
        />
      </div>

      <Input
        id="note"
        type="text"
        name="note"
        label="Notas"
        defaultValue={data.note}
      />

      <Errors list={errors} />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {data.id ? "Editar cliente" : "Crear cliente"}
        </button>
      </div>
    </Form>
  );
};

FormCustomer.propTypes = {
  data: shape({ id: number, name: string, company: string, email: string }),
};

FormCustomer.defaultProps = {
  data: {},
};

export default FormCustomer;
