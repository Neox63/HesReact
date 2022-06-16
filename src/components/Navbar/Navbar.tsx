import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { navDemoContent, navGestionContent } from "../../utils/routes";
import ThemeToggle from "../ThemeToggle";

const Navbar = ({ type }: { type: "demo" | "gestion" }) => {
  const { title, routes } =
    type === "demo" ? navDemoContent : navGestionContent;

  return (
    <nav className="flex items-center justify-between px-2 py-4 text-white bg-purple-500 md:px-6">
      <Link to="/" className="text-2xl">
        {title}
      </Link>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-2 px-6 border-r border-gray-300">
          {routes.map((route, index) => (
            <li key={index}>
              <NavLink
                className="block px-4 py-1 text-center transition duration-300 bg-transparent rounded-lg hover:bg-white hover:text-purple-500"
                to={route.link}
              >
                {route.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
