import { useLoaderData } from "react-router-dom";

import Title from "../components/Title";
import FormCustomer from "../components/FormCustomer";

const EditCustomer = () => {
  const data = useLoaderData();

  return (
    <>
      <Title title="Editar cliente" />

      <div className="flex justify-center">
        <FormCustomer data={data} />
      </div>
    </>
  );
};

export default EditCustomer;
