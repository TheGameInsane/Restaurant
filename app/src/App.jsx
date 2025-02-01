import Foot from "./components/Foot";
import Head from "./components/Head";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="bg-black">
      <Head/>
      <Hero />
      <Menu />
      <Foot/>
      </div>
    </>
  );
}

export default App;
