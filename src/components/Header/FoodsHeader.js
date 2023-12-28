import { NavLink, Link, useLocation } from "react-router-dom";
import Search from "../SearchInput/Search";

const FoodHeaders = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/cuisine", name: "Our Cuisine" },
    { path: "/favorites", name: "Your Favorites" },
    { path: "/area", name: "Browse by Country" },
  ];

  return (
    <header className="flex bg-white justify-between items-center lg:px-[1%] xl:px-[5%] 2xl:px-[10%] py-[0.7rem] shadow-md">
      <div className="mr-3">
        <Link to="/" className="text-black font-bold text-[22px]">
          Savory<span className="text-green-500">Secrets</span>
        </Link>
      </div>
      <div>
        <ul className="flex gap-10 font-semibold text-base md:ml-12">
          {navLinks.map(({ path, name }, index) => (
            <li key={index} className="text-black font-medium">
              <NavLink
                to={path}
                end
                className={`hover:text-green-500 ${
                  location.pathname === path ? "text-green-500" : ""
                }`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Search />
      </div>
    </header>
  );
};

export default FoodHeaders;
