import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Title() {
  return (
    <a href="/">
      <img className="h-14 pt-5 px-5" src={Logo} alt="logo" />
    </a>
  );
}

function Header() {
  return (
    <div className="flex justify-between bg-white  shadow-sm sticky top-0">
      <Title />
      <ul className="flex py-6 font-medium  text-slate-700 space-x-11">
        <li className="px-4 cursor-pointer hover:text-red-600">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 cursor-pointer hover:text-red-600">
          <Link to="/about">About</Link>
        </li>
        <li className="px-4 cursor-pointer hover:text-red-600">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-4 cursor-pointer hover:text-red-600">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
