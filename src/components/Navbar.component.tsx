import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex items-center justify-between p-4">
        <NavLink
          className="self-center text-4xl font-semibold whitespace-nowrap text-orange-700"
          to="/"
        >
          MithraFashions
        </NavLink>

        <ul className="font-medium flex rounded-lg gap-4">
          <li>
          <NavLink
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-white bg-blue-900 rounded"
                  : "p-2 text-blue-900 rounded"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-white bg-blue-900 rounded"
                  : "p-2 text-blue-900 rounded"
              }
              to="/"
            >
              Cart
            </NavLink>
          </li>
          <li>
          <NavLink
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-white bg-blue-900 rounded"
                  : "p-2 text-blue-900 rounded"
              }
              to="/"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;