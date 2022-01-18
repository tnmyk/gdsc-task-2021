import { useEffect, useState } from "react";
import Card from "./Card";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  const [current, setCurrent] = useState(0);
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Fetch Users</h1>
      <button
        onClick={() => {
          if (current === data.length - 1) return;
          setCurrent(current + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (current === 0 ) return;
          setCurrent(current - 1);
        }}
      >
        -
      </button>
      <Card data={data.filter((x, index) => index === current)[0]} />
    </main>
  );
};

export default Users;
