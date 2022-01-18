import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
const Nav = () => {
  return (
    <nav className="w-full flex justify-between text-xl p-8 px-16">
      <Link to="/" className="text-2xl">
        Web Team Task
      </Link>
      <div className="flex gap-x-12">
        <Link to="/users">Get Users</Link>
        <Link to="/photos">Get Photos</Link>
        <a href="/" className="flex gap-x-2 items-center">
          Project Github <BsGithub />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
