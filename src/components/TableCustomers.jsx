import { Form } from "react-router-dom";
import { arrayOf, shape, func, string, number } from "prop-types";

const TableCustomers = ({ columns, data, onEdit }) => (
  <table className="w-full text-sm text-left text-gray-300">
    <thead className="text-xs text-white uppercase bg-gray-700">
      <tr>
        {columns &&
          columns.map((item) => (
            <th scope="col" className="py-3 px-6" key={item}>
              {item}
            </th>
          ))}
      </tr>
    </thead>

    <tbody>
      {data &&
        data.map((item) => (
          <tr key={item.id} className="border-b bg-gray-800 border-gray-700">
            <td className="py-4 px-6">{item.id}</td>
            <td className="py-4 px-6">{item.name}</td>
            <td className="py-4 px-6">{item.company}</td>
            <td className="py-4 px-6">{item.email}</td>
            <td className="flex py-4 px-6">
              <button
                type="buttom"
                onClick={() => onEdit(item.id)}
                className="font-medium text-blue-600 hover:underline mr-5"
              >
                Editar
              </button>

              <Form
                noValidate
                method="post"
                action={`customer/${item.id}/delete`}
              >
                <button
                  type="submit"
                  className="font-medium text-red-600 hover:underline"
                >
                  Eliminar
                </button>
              </Form>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
);

TableCustomers.propTypes = {
  columns: arrayOf(string).isRequired,
  data: arrayOf(
    shape({ id: number, name: string, company: string, email: string })
  ).isRequired,
  onEdit: func.isRequired,
};

export default TableCustomers;
