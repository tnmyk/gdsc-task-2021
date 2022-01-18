const Card = ({ data }) => {
  return (
    <div className="border border-zinc-600 p-8 py-8  w-7/12 rounded-lg">
      <h1 className="text-3xl font-bold">{data?.name}</h1>
      <h2 className="text-lg">@{data?.username}</h2>
      <div className="flex mt-6">
        <div className="w-1/2 mr-3">
          <a
            href={"https://" + data?.website}
            target={"_blank"}
            rel="noreferrer"
            className="underline"
          >
            {data?.website}
          </a>
          <div>{data?.email}</div>
          <div>{data?.phone}</div>
          <div>
            {data?.address.street}, {data?.address.suite}, {data?.address.city}
          </div>
          <div>
            Zip: {data?.address.zipcode}
            {data?.address.geo.lat}
            {data?.address.geo.lng}
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold">Work</h1>
          <div>{data?.company.name}</div>
          <div>{data?.company.catchPhrase}</div>
          <div>{data?.company.bs}</div>
        </div>
      </div>
      <br />
      <span className="text-sm">ID: {data?.id}</span>
    </div>
  );
};

export default Card;
