import engine from "../assets/engine.svg";

const Head = () => {
  return (
    <>
      <nav className="flex items-center justify-between ">
        <div className="ml-5 hidden xl:block">
          <div className="button border-2 text-xl font-merriweather"><a href="/" >Reservations</a></div>
          <div className="button text-xl font-merriweather">
            <a href="#menu" >Menu</a>
          </div>
          <div className="button text-xl font-merriweather">
            <a href="#foot" >Contact</a>
          </div>
        </div>
        <h1 className="hidden leading-40 sm:block sm:text-5xl lg:text-6xl pl-4 text-white font-playwrite font-bold select-none">
          <img
            src={engine}
            alt="engine"
            className="hidden md:w-60 xl:inline invert-100 h-50 bg-cover"
          />
          The Great Indian Express
        </h1>
      </nav>
    </>
  );
};

export default Head;
