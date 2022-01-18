import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link
      to={data.link}
      style={{ backgroundColor: "#3C3C3C" }}
      className="w-10/12  sm:w-1/3 rounded-xl p-4 pt-7 pb-5 flex flex-col items-center"
    >
      <img src={data.image} alt="nmo" width="140px" />
      <h1 style={{ color: "#ECECEC" }} className="text-2xl font-medium mt-2">
        {data.text}
      </h1>
    </Link>
  );
};

export default Card;
