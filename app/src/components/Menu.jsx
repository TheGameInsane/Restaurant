import data from "../assets/data.json";
import Card from "./Card";

const Menu = () => {
  return (
    <>
      <div id="menu">
        <div className="w-full flex justify-center my-20"><h1 className="text-white text-6xl p-2 font-medium">Menu</h1></div>
        <section className="grid grid-cols-3 gap-10 mx-10">
          {data.map((dat, id) => (
            <Card name={dat.name} image={dat.image} desc={dat.desc} type={dat.type} key={id} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Menu;
