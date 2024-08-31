import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Marquee() {
  const container = useRef(null);

  useGSAP(() => {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        gsap.to(".marquee", {
          transform: "translateX(-100%)",
          duration: 6,
          ease: "none",
          repeat: -1,
        })
        gsap.to(".marquee img", {
          rotate: 180
        })
      }
      else{
        gsap.to(".marquee", {
          transform: "translateX(0%)",
          duration: 6,
          ease: "none",
          repeat: -1,
        })
        gsap.to(".marquee img", {
          rotate: 0
        })
      }
    });
  });

  return (
    <div
      ref={container}
      className="mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] text-white text-9xl"
    >
      <div className="flex items-center font-bold uppercase overlay-hidden">
        <div className="marquee flex gap-[3vw] items-center px-[1.5vw] flex-shrink-0">
          <h2 className="leading-none">Hey I&rsquo;m Hasan</h2>
          <img
            className="h-[4.5vw]"
            src="../../../public/right-arrow.png"
            alt=""
          />
        </div>
        <div className="marquee flex gap-[3vw] items-center px-[1.5vw] flex-shrink-0">
          <h2 className="leading-none">Hey I&rsquo;m Hasan</h2>
          <img
            className="h-[4.5vw]"
            src="../../../public/right-arrow.png"
            alt=""
          />
        </div>
        <div className="marquee flex items-center px-[1.5vw] flex-shrink-0">
          <h2 className="leading-none">Hey I&rsquo;m Hasan</h2>
          <img
            className="h-[4.5vw]"
            src="../../../public/right-arrow.png"
            alt=""
          />
        </div>
        <div className="marquee flex gap-[3vw] items-center px-[1.5vw] flex-shrink-0">
          <h2 className="leading-none">Hey I&rsquo;m Hasan</h2>
          <img
            className="h-[4.5vw]"
            src="../../../public/right-arrow.png"
            alt=""
          />
        </div>
        {/* <div className="marquee flex gap-[3vw] items-center px-[1.5vw] flex-shrink-0">
          <h2 className="leading-none">MERN stack developer</h2>
          <img
            className="h-[4.5vw]"
            src="../../../public/right-arrow.png"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}
