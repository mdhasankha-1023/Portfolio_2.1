/* eslint-disable react/prop-types */
import {useRef, useState } from "react";
import Icons from "../../UI/Icons/Icons";
import brand from "../../../public/brand.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar({activeSection, setActiveSection}) {
  const [clicked, setClicked] = useState(false);
  const tl = useRef();
  const barsRef = useRef(null);
  const cancelRef = useRef(null);

  console.log(activeSection)

  // nav lg screen animation
  useGSAP(
    () => {
      tl.current = gsap.timeline().from(".brand", {
        y: -50,
        opacity: 0,
        duration: 1,
      });

      tl.current = gsap.timeline().from(".navLink h2", {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });

      tl.current = gsap.timeline().from(".bars", {
        opacity: 0,
        scale: 0.4,
        duration: 1,
      });


    },
    {  dependencies: [setClicked] }
  );

  const navLinks = (
    <>
      <h2 className={activeSection === "home" ? "active" : ""}>
        <a href="#home" onClick={() => setActiveSection("home")}>
          Home
        </a>
      </h2>
      <h2 className={activeSection === "about" ? "active" : ""}>
        <a href="#about" onClick={() => setActiveSection("about")}>
          About
        </a>
      </h2>
      <h2 className={activeSection === "skills" ? "active" : ""}>
        <a href="#skills" onClick={() => setActiveSection("skills")}>
          Skills
        </a>
      </h2>
      <h2 className={activeSection === "projects" ? "active" : ""}>
        <a href="#projects" onClick={() => setActiveSection("projects")}>
          Projects
        </a>
      </h2>
      <h2 className={activeSection === "contact" ? "active" : ""}>
        <a href="#contact" onClick={() => setActiveSection("contact")}>
          Contact
        </a>
      </h2>
    </>
  );

  return (
    <nav
      className="relative mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] flex justify-between items-center lg:px-4 px-8 py-6"
    >
      <div className="brand flex gap-1 items-center">
        <figure className="h-[40px] w-[40px]">
          <img className="h-full w-full" src={brand} alt="brand" />
        </figure>
        <h1 className="text-5xl font-bold text-white uppercase">asan</h1>
      </div>
      <div className="navLink text-white hidden lg:flex gap-10 text-lg">
        {navLinks}
      </div>
      <div ref={barsRef} className="bars flex lg:hidden">
        <Icons type={"bars"} style={"text-2xl text-white"} />
      </div>
      {clicked && (
        <div className="sm-device absolute top-0 left-0 w-full h-[100vh] bg-white flex items-center justify-center">
          <div
            ref={cancelRef}
            className="cancelBtn absolute top-[5%] right-[5%]"
          >
            <Icons type={"cancel"} style={"text-2xl text-[#111]"} />
          </div>
          <div className="navLink text-xl font-bold flex flex-col items-center gap-10 lg:hidden">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
}
