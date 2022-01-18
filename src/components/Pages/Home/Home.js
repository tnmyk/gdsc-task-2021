import Card from "./Card";

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
      <h1 style={{ fontSize: "5rem" }} className="font-bold  mt-24">
        GDSC Web Team Task
      </h1>
      <h2
        style={{ fontSize: "1.35rem", color: "#FBFBFB" }}
        className=" mt-2 font-medim"
      >
        by Tanmay Kachroo (20BCE10142)
      </h2>
      <h2 style={{ color: "#D9D9D9" }} className="mt-24 font-medium text-xl">
        Control the margin on one side of an element using the utilities.
      </h2>
      <div className="flex w-10/12 justify-center gap-x-6 mt-3">
        {Cards.map((card) => {
          return <Card data={card} />;
        })}
      </div>
    </main>
  );
};

export default Home;
