import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Icons from "../../../UI/Icons/Icons";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import { useRef } from "react";

export default function Content() {
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
        Hi, I’m Md Hasan Kha, a passionate MERN Stack Developer with over 1 year of experience building responsive, user-friendly web applications. I specialize in React, Node.js, and MongoDB, and I’m always excited to take on new challenges. Let’s create something amazing together!
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
