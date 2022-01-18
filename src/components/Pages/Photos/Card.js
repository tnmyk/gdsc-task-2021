const Card = ({ data }) => {
  return (
    <div className="border border-zinc-600 p-8 py-8  w-1/3 rounded-lg flex flex-col items-center">
      <div className="rounded-full overflow-hidden w-1/2">
        <img src={data?.url} />
      </div>
      <h2 className="text-center mt-3 font-medium text-lg">{data?.title}</h2>
    </div>
  );
};

export default Card;
