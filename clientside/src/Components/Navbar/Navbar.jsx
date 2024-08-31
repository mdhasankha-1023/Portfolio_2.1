import {  useRef, useState } from "react";
import Icons from "../../UI/Icons/Icons";
import brand from "../../../public/brand.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const container = useRef();
  const tl = useRef();

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
    { scope: container},
    "-=1"
  );


  // handle clicked btn
  const handleClickedBtn = () => {
    setClicked(!clicked);
  };

  const navLink = (
    <>
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Skills</h2>
      <h2>Projects</h2>
      <h2>Contact</h2>
    </>
  );
  return (
    <nav
      ref={container}
      className="relative mx-auto max-w-full lg:max-w-5xl px-14 xl:max-w-7xl 2xl:max-w-[96rem] flex justify-between items-center lg:px-4 px-8 py-6"
    >
      <div className="brand flex gap-1 items-center">
        <figure className="h-[40px] w-[40px]">
          <img className="h-full w-full" src={brand} alt="brand" />
        </figure>
        <h1 className="text-5xl font-bold text-white uppercase">asan</h1>
      </div>
      <div className="navLink text-white hidden lg:flex gap-10 text-lg">
        {navLink}
      </div>
      <div onClick={handleClickedBtn} className="bars flex lg:hidden">
        <Icons type={"bars"} style={"text-2xl text-white"} />
      </div>
      {clicked && (
        <div className="sm-device absolute top-0 left-0 w-full h-[100vh] bg-white flex items-center justify-center">
          <div onClick={handleClickedBtn} className="cancelBtn absolute top-[5%] right-[5%]">
            <Icons type={"cancel"} style={"text-2xl text-[#111]"} />
          </div>
          <div className="navLink text-xl font-bold flex flex-col items-center gap-10 lg:hidden">
            {navLink}
          </div>
        </div>
      )}
    </nav>
  );
}
