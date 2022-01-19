import { useEffect } from "react";
import Card from "./Card";
import styles from "./Home.module.css";
const Cards = [
  {
    text: "Get users",
    image: require("../../../assets/images/getUsers.png"),
    link: "/users",
  },
  {
    text: "Get photos",
    image: require("../../../assets/images/getImages.png"),
    link: "/photos",
  },
];
const Home = () => {
  useEffect(() => {
    document.title = "GDSC Web Team Task";
  }, []);
  return (
    <main className="flex flex-col items-center">
      <h1 className={`${styles.heading} font-bold  mt-24`}>
        GDSC Web Team Task
      </h1>
      <h2
        style={{ fontSize: "1.35rem", color: "#FBFBFB" }}
        className="text-center mt-2 font-medim"
      >
        by Tanmay Kachroo (20BCE10142)
      </h2>
      <h2
        style={{ color: "#D9D9D9" }}
        className="text-center mt-24 font-medium text-xl"
      >
        Choose between getting Users or Photos
      </h2>
      <div className="flex flex-col sm:flex-row w-full sm:w-10/12 justify-center items-center gap-x-6 gap-y-4 mt-3">
        {Cards.map((card) => {
          return <Card data={card} />;
        })}
      </div>
    </main>
  );
};

export default Home;
