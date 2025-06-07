import Hero from "./layouts/Hero/Hero";
import Preloader from "./layouts/Preloader/Preloader"

export default function Home() {
  return (
    <>
    <Preloader/>
      <main>
        <Hero/>
      </main>
    </>
  );
}
