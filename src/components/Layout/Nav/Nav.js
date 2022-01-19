import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center text-xl p-8 px-4 sm:px-16">
      <Link to="/" className="text-2xl">
        Web Task
      </Link>
      <div className={`flex gap-x-6 text-lg`}>
        <Link to="/users" className="nav-link">
          Get Users
        </Link>
        <Link to="/photos" className="nav-link">
          Get Photos
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
