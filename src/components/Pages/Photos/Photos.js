import { useEffect, useState } from "react";
import Card from "./Card";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { FiShuffle } from "react-icons/fi";
const Photos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  const [current, setCurrent] = useState(0);
  return (
    <main className="flex flex-col items-center mt-4">
      <h1 className="text-3xl font-bold">Fetch Photos</h1>
      <div className="flex gap-x-6 w-11/12 justify-center mt-5 items-center">
        <BsArrowLeftCircle
          onClick={() => {
            if (current === 0) return;
            setCurrent(current - 1);
          }}
          className="cursor-pointer text-2xl"
        />
        <Card data={data.filter((x, index) => index === current)[0]} />
        <BsArrowRightCircle
          onClick={() => {
            if (current === data.length - 1) return;
            setCurrent(current + 1);
          }}
          className="cursor-pointer text-2xl"
        />
      </div>
      <button
        className="mt-4 p-2 px-4 rounded-full bg-green-500 flex items-center gap-x-1"
        onClick={() => {
          setCurrent(Math.floor(Math.random() * data.length));
        }}
      >
        Shuffle <FiShuffle />
      </button>
    </main>
  );
};

export default Photos;
