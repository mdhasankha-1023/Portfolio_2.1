import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Pages/Sections/AboutMe/AboutMe";
import Contact from "./Pages/Sections/Contact/Contact";
import Home from "./Pages/Sections/Home/Home";
import Projects from "./Pages/Sections/Projects/Projects";
import Skills from "./Pages/Sections/Skills/Skills";
import Studies from "./Pages/Sections/Studies/Studies";

export default function Root() {
  return (
    <div className="bg-primary">
        {/* <!-- navbar --> */}
		 <div className="sticky top-0 bg-primary z-50">
			 <Navbar/>
		 </div>

		 {/* <!-- home --> */}
		  <div id="home" className="py-32"> 
			  <Home/>
		  </div>

		 {/* <!-- about me --> */}
		  <div id="about" className="py-24 bg-secondary"> 
			  <AboutMe/>
		  </div>

		 {/* <!-- skills --> */}
		  <div id="skills" className="py-24"> 
			  <Skills/>
		  </div>

		 {/* <!-- studies --> */}
		  <div id="studies" className="py-24 bg-secondary"> 
			  <Studies/>
		  </div>

		 {/* <!-- projects --> */}
		  <div id="projects" className="py-24"> 
			  <Projects/>
		  </div>

		 {/* <!-- Contact --> */}
		  <div id="contact" className="py-24"> 
			  <Contact client:load/>
		  </div>
    </div>
  )
}
