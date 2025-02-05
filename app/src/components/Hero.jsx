const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[url(assets/hero.jpg)] bg-cover h-190 bg-center"></div>
        <div className="w-full h-full bg-linear-to-t from-black via-white/0 to-black absolute top-0 left-0"></div>
        <div className="top-[40%] absolute w-full flex justify-center"><h1 className="text-white font-merriweather text-5xl sm:text-8xl font-semibold">Taste Authentic.</h1></div>
      </div>
    </>
  );
};

export default Hero;
