import engine from "../assets/engine.svg";

const Head = () => {
  return (
    <>
      <nav className="flex items-center justify-between ">
        <div className="ml-5 hidden xl:block">
          <button className="button border-2 text-xl font-merriweather">
            <a target="_main" href="https://www.zomato.com/">
              Reservations
            </a>
          </button>
          <button className="button text-xl font-merriweather">
            <a href="#menu">Menu</a>
          </button>
          <button className="button text-xl font-merriweather">
            <a href="#foot">Contact</a>
          </button>
        </div>
        <div>
          <img
            src={engine}
            alt="engine"
            className="hidden md:w-60 xl:inline invert-100 h-50 bg-cover"
          />
          <h1 className="hidden leading-40 sm:inline sm:text-5xl lg:text-6xl pl-4 text-white font-playwrite font-bold select-none">
            The Great Indian Express
          </h1>
        </div>
        <div className="xl:hidden h-10 w-10 m-4">
          <hr className="text-white mb-3 border-2" />
          <hr className="text-white mb-3 border-2" />
          <hr className="text-white mb-3 border-2" />
        </div>
      </nav>
    </>
  );
};

export default Head;
