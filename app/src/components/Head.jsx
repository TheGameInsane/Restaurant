import engine from "../assets/engine.svg"

const Head = () => {
  return (
    <>
      <nav className="flex items-center justify-between ">
        <div className="ml-5">
        <button className="button">Reserve</button>
        <button className="button"><a href="#menu">Menu</a></button>
        </div>
        <h1 className="hidden sm:block sm:text-5xl lg:text-6xl text-white font-playwrite font-bold select-none">
          <img src={engine} alt="engine" className="hidden md:w-60 lg:inline invert-100 h-50 bg-cover" /> The Great
          Indian Express
        </h1>
      </nav>
    </>
  );
};

export default Head;
