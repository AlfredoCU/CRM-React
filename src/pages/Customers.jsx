import { useLoaderData, useNavigate } from "react-router-dom";

import Title from "../components/Title";
import columns from "../constants/columns";
import TableCustomers from "../components/TableCustomers";

const Customers = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const onEdit = (id) => {
    navigate(`/customer/${id}/edit`);
  };

  return (
    <>
      <Title title="Clientes" />

      {data ? (
        <TableCustomers data={data} onEdit={onEdit} columns={columns} />
      ) : (
        <p>No existen clientes</p>
      )}
    </>
  );
};

export default Customers;
