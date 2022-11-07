import { string } from "prop-types";

const Title = ({ title }) => (
  <h1 className="text-4xl text-gray-700 pb-10">{title}</h1>
);

export default Title;

Title.propTypes = {
  title: string.isRequired,
};
