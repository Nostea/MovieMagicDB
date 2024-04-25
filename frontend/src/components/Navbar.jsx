import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-2 px-2">
      <Link to={"/"}>
        <p className=" text-mint-400 uppercase text-2xl font-extrabold">MagicMovie</p>
      </Link>
      <div className="flex flex-row">
        <NavLink to={"/movies/add"}>
          <p className=" text-violet-300 opacity-70">Add your own</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
