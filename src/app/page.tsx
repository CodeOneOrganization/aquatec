'use client'

import { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import About from "./layouts/About/About";
import Hero from "./layouts/Hero/Hero";
import Preloader from "./layouts/Preloader/Preloader"
import Services from "./layouts/Services/Services";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {

  useEffect(() => {

    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',

      smooth: 2,
      smoothTouch: 2
    });

  }, [])

  return (
    <>
      <Preloader/>  
      <header>
        <Nav />
      </header>
      <main>

        <div id="smooth-wrapper">
          <div id="smooth-content">

            <div className="line"></div>
            <div className="line"></div>

            <Hero />
            <About />
            <Services />
            {/* <About/> */}
          </div>
        </div>
      </main>
    </>
  );
}
