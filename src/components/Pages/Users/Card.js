const Card = ({ data }) => {
  return <div className="border border-zinc-600 p-5 w-7/12 rounded-lg">{data?.name}</div>;
};

export default Card;
