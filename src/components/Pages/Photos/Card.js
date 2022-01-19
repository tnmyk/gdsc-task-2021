const Card = ({ data }) => {
  return (
    <div className="border border-zinc-600 p-8 py-8 w-full sm:w-1/3 rounded-lg flex flex-col items-center">
      {data ? (
        <>
          <div className="rounded-full overflow-hidden   w-1/2 flex items-center justify-center">
            <img src={data?.thumbnailUrl} width={"100%"} />
          </div>
          <h2 className="text-center mt-3 font-medium text-lg">
            {data?.title}
          </h2>
          <span className="text-sm">ID: {data?.id}</span>
        </>
      ) : (
        <div className="h-40 flex items-center justify-center">Loading... </div>
      )}
    </div>
  );
};

export default Card;
