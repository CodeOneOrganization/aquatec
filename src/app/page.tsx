import Nav from "./components/Nav/Nav";
import About from "./layouts/About/About";
import Hero from "./layouts/Hero/Hero";
import Preloader from "./layouts/Preloader/Preloader"

export default function Home() {
  return (
    <>
      <Preloader/>  
      <header>
        <Nav/>
      </header>
      <main>
        <div className="line"></div>
        <div className="line"></div>
        <Hero />
        <About/>
        {/* <About/> */}
      </main>
    </>
  );
}
