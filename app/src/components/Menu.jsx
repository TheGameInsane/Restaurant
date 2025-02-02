import data from "../assets/data.json";
import Card from "./Card";

const Menu = () => {
  return (
    <>
      <div id="menu">
        <div className="w-full flex justify-center mt-20">
          <h1 className="text-white text-6xl p-2 font-medium">Menu</h1>
        </div>
        <div className="w-full p-6">
          <h1 className="text-white text-4xl">Most popular</h1>
        </div>
        <section className="grid grid-cols-5 gap-10 mx-10 overflow-visible">
          {data.map((dat, id) => (
            <Card
              name={dat.name}
              image={dat.image}
              desc={dat.desc}
              type={dat.type}
              key={id}
            />
          ))}
        </section>
        <div className="flex justify-center ">
          <button className="text-2xl button">See All</button>
        </div>
      </div>
    </>
  );
};

export default Menu;
