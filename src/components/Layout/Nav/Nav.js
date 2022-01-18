import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center text-xl p-8 px-4 sm:px-16">
      <Link to="/" className="text-2xl">
        Web Task
      </Link>
      <div className={`flex gap-x-4 text-lg`}>
        <Link to="/users">Get Users</Link>
        <Link to="/photos">Get Photos</Link>
      </div>
    </nav>
  );
};

export default Nav;
