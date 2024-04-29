import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-2 px-4">
      <Link to={"/"}>
        <p className=" text-mint-400 uppercase text-4xl font-extrabold">MagicMovie</p>
      </Link>
    </nav>
  );
};

export default Navbar;
