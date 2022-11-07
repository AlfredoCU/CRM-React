import { number, oneOfType, string } from "prop-types";

const Input = ({ id, type, name, label, defaultValue }) => (
  <div className="relative z-0 mb-6 w-full group">
    <input
      id={id}
      type={type}
      name={name}
      placeholder=" "
      defaultValue={defaultValue}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer"
    />
    <label
      htmlFor={id}
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

Input.propTypes = {
  id: string.isRequired,
  type: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  defaultValue: oneOfType([string, number]),
};

export default Input;
