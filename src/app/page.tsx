import Nav from "./components/Nav/Nav";
import About from "./layouts/About/About";
import Disponibility from "./layouts/Disponibility/Disponibility";
import Footer from "./layouts/Footer/Footer";
import Hero from "./layouts/Hero/Hero";
import Message from "./layouts/Message/Message";
import Preloader from "./layouts/Preloader/Preloader"
import Services from "./layouts/Services/Services";
import SmoothScroll from "./layouts/SmoothScroll/SmoothScroll";
import WhatsAppButton from "./layouts/WhatsAppButton/WhatsAppButton";

export default function Home() {



  return (
    <>
      <Preloader />
      <header>
        <Nav />
      </header>
      <main>

          <WhatsAppButton/>
        <SmoothScroll>
          <div className="line"></div>
          <div className="line"></div>

          <Hero />
          <Disponibility/>
          <About />
          <Services />
          <Message/>
          <Footer/>

        </SmoothScroll>
      </main>
    </>
  );
}
