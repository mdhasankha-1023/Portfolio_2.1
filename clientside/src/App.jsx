import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Pages/Sections/AboutMe/AboutMe";
import Contact from "./Pages/Sections/Contact/Contact";
import Home from "./Pages/Sections/Home/Home";
import Projects from "./Pages/Sections/Projects/Projects";
import Skills from "./Pages/Sections/Skills/Skills";
import Marquee from "./UI/Marquee/Marquee";

export default function App() {
  return (
    <div className="bg-primary">
      {/* <!-- navbar --> */}
      <div className="sticky top-0 bg-primary z-50">
        <Navbar />
      </div>

      {/* <!-- home --> */}
      <div id="home" className="py-20">
        <Home />
      </div>

      {/* <!-- marquee --> */}
      <div className="bg-btn-primary py-24 ">
        <div className="border-t-[1px] border-b-[1px] border-white pb-6">
          <Marquee />
        </div>
      </div>

      {/* <!-- about me --> */}
      <div id="about" className="py-24 bg-secondary">
        <AboutMe />
      </div>

      {/* <!-- skills --> */}
      <div id="skills" className="py-24">
        <Skills />
      </div>

      {/* <!-- projects --> */}
      <div id="projects" className="py-24">
        <Projects />
      </div>

      {/* <!-- Contact --> */}
      <div id="contact" className="py-24">
        <Contact client:load />
      </div>
    </div>
  );
}
