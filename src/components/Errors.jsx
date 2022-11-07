import { string, arrayOf } from "prop-types";

const Errors = ({ list }) => (
  <ul className="list-disc mb-5">
    {list &&
      list.map((item, key) => (
        <li key={key} className="mt-2 text-sm text-red-600 dark:text-red-500">
          {item}
        </li>
      ))}
  </ul>
);

Errors.propTypes = {
  list: arrayOf(string),
};

export default Errors;
