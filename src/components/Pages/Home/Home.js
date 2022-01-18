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
  return (
    <main className="flex flex-col items-center">
      <h1 className={`${styles.heading} font-bold  mt-24`}>
        GDSC Web Team Task
      </h1>
      <h2
        style={{ fontSize: "1.35rem", color: "#FBFBFB" }}
        className=" mt-2 font-medim"
      >
        by Tanmay Kachroo (20BCE10142)
      </h2>
      <h2
        style={{ color: "#D9D9D9" }}
        className="text-center mt-24 font-medium text-xl"
      >
        Control the margin on one side of an element using the utilities.
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
