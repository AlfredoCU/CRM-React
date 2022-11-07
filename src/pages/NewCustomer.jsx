import Title from "../components/Title";
import FormCustomer from "../components/FormCustomer";

const NewCustomer = () => (
  <>
    <Title title="Crear cliente" />

    <div className="flex justify-center">
      <FormCustomer />
    </div>
  </>
);

export default NewCustomer;
