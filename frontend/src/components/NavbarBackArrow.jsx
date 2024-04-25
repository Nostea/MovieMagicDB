import { Link } from "react-router-dom";
import BackArrow from "./BackArrow";

const NavbarBackArrow = () => {
  return (
    <Link to="/">
      <div className=" fill-slate-50">
        <BackArrow />
      </div>
    </Link>
  );
};

export default NavbarBackArrow;
