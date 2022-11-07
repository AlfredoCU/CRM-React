import { string, func } from "prop-types";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, name, handleCloseMenu }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      onClick={handleCloseMenu}
      className={`${
        pathname === to && "border-l-4 bg-slate-600"
      } py-4 my-1 px-2 hover:border-l-4 border-l-white text-white transition-all ease-in-out`}
    >
      {name}
    </Link>
  );
};

NavLink.propTypes = {
  to: string.isRequired,
  name: string.isRequired,
  handleCloseMenu: func.isRequired,
};

export default NavLink;
