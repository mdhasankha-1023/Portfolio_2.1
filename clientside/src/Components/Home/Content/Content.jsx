import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Icons from "../../../UI/Icons/Icons";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import { useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';

export default function Content() {
const locomotiveScroll = new LocomotiveScroll();
  const container = useRef(null)
  const tl = useRef(null)


  useGSAP(()=>{
    tl.current = gsap.timeline()
    .from('.lending_text', {
      opacity: 0,
      duration: 4,
      stagger: 1
    })
  })
  
  const handleGetTouchBtn = () => {
    console.log("clicked");
  };

  return (
    <div ref={container} className="py-6 flex flex-col">
      <div className="lending_text my-4">
        <PrimaryTitle
          main={"Hay! i am Hasan"}
          mainStyle={"text-6xl"}
          subStyle={"bg-secondary"}
          subTitle={"Md. Hasan Kha"}
        />
      </div>
      <div className="lending_text my-4">
        <p className="text-justify text-xl text-[#c7ced1]">
          With over 1 year of experience creating engaging and functional web
          experiences. Expert in front-end technologies including HTML5, CSS3,
          JavaScript and frameworks such as React, Next.js, Astro. Able to
          translate creative designs into interactive code and optimize website
          speed and performance.
        </p>
      </div>
      <div className="lending_text my-4 flex gap-10">
        <button onClick={handleGetTouchBtn} className="px-8 py-4 bg-btn-primary rounded-full text-primary text-lg font-bold flex justify-center items-center gap-2">
          <span>Get in Touch</span>
          <Icons style={"text-primary text-lg"} type="arrow-right" />
        </button>
        <button  className="px-8 py-4 text-primary text-lg font-bold flex justify-center items-center gap-2 border-2 rounded-full">
          <span>Get in Touch</span>
          <Icons style={"text-primary text-lg"} type="arrow-right" />
        </button>
      </div>
    </div>
  );
}
