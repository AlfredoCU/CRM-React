import { useState } from "react";
import { Outlet } from "react-router-dom";

import NavLink from "./NavLink";
import navMenu from "../constants/navMenu";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="h-screen md:min-h-screen">
      <header className="lg:hidden p-5 bg-gray-800">
        <button type="button" onClick={handleOpenMenu}>
          <img src="/bars-solid.svg" alt="menu" width="25px" />
        </button>
      </header>

      <div className="flex">
        <aside
          className={`${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } h-screen fixed z-50 top-0 lg:static w-9/12 md:w-2/4 lg:w-1/4 pt-5 pb-10 lg:pt-10 lg:pb-20 bg-gray-800 overflow-scroll transition-transform ease-in-out lg:translate-x-0`}
        >
          <h2 className="px-5 text-center text-xl md:text-2xl font-semibold text-white">
            CRM Administrador de clientes
          </h2>

          <nav className="flex flex-col mt-5 lg:mt-10 text-lg">
            {navMenu.map((item) => (
              <NavLink
                {...item}
                key={item.id}
                handleCloseMenu={handleCloseMenu}
              />
            ))}
          </nav>
        </aside>

        <div
          onClick={handleCloseMenu}
          className={`${
            showMenu &&
            "bg-slate-900 opacity-80 w-screen h-screen fixed inset-0 z-1"
          } lg:hidden`}
        />

        <main className="w-full lg:w-3/4 p-5 lg:p-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
