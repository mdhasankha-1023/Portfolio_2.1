import { useGSAP } from "@gsap/react";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Pages/Sections/AboutMe/AboutMe";
import Contact from "./Pages/Sections/Contact/Contact";
import Home from "./Pages/Sections/Home/Home";
import Projects from "./Pages/Sections/Projects/Projects";
import Skills from "./Pages/Sections/Skills/Skills";
import Marquee from "./UI/Marquee/Marquee";
import { useRef } from "react";
import gsap from "gsap";

export default function App() {
  const navRef = useRef();

  useGSAP(()=>{
    window.addEventListener('wheel', (event)=>{
      if(event.deltaY > 0){
        gsap.to(navRef.current, {
          y: -100,
          duration: 0.6
        })
      }else{
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.6
        })
      }
    })
  })



  return (
    <div className="bg-primary">
      {/* <!-- navbar --> */}
      <header ref={navRef} className="sticky top-0 bg-primary z-50">
        <Navbar />
      </header>

      {/* <!-- home --> */}
      <section id="home" className="py-20">
        <Home />
      </section>

      {/* <!-- marquee --> */}
      <section className="bg-btn-primary py-24 ">
        <div className="border-t-[1px] border-b-[1px] border-white pb-6">
          <Marquee />
        </div>
      </section>

      {/* <!-- about me --> */}
      <section id="about" className="py-24 bg-secondary">
        <AboutMe />
      </section>

      {/* <!-- skills --> */}
      <section id="skills" className="py-24">
        <Skills />
      </section>

      {/* <!-- projects --> */}
      <section id="projects" className="py-24">
        <Projects />
      </section>

      {/* <!-- Contact --> */}
      <section id="contact" className="py-24">
        <Contact client:load />
      </section>
    </div>
  );
}
