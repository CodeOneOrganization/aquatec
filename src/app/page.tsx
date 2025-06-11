import Nav from "./components/Nav/Nav";
import About from "./layouts/About/About";
import Hero from "./layouts/Hero/Hero";
import Preloader from "./layouts/Preloader/Preloader"
import Services from "./layouts/Services/Services";
import SmoothScroll from "./layouts/SmoothScroll/SmoothScroll";

export default function Home() {



  return (
    <>
      <Preloader />
      <header>
        <Nav />
      </header>
      <main>

        <SmoothScroll>
          <div className="line"></div>
          <div className="line"></div>

          <Hero />
          <About />
          <Services />
          
        </SmoothScroll>
      </main>
    </>
  );
}
