import { useRef } from "react";
import Pagination from "../../../UI/Pagination/Pagination";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Icons from "../../../UI/Icons/Icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// sample projects
const projects = [
  {
    name: "Teachfosys",
    liveLink: "https://www.teachfosys.com",
  },
  {
    name: "Teachfosys",
    liveLink: "https://www.teachfosys.com",
  },
  {
    name: "Teachfosys",
    liveLink: "https://www.teachfosys.com",
  },
];

export default function Projects() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from('.card_container', {
        y: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: container.current,
          start: 'top center',
          end: 'top -200%',
          // markers: true,
        }
      })
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="mx-auto max-w-full lg:max-w-5xl px-14 xl:max-w-7xl 2xl:max-w-[96rem] py-8"
    >
      <div className="my-4">
        <PrimaryTitle
          main={"My Working"}
          mainStyle={"text-4xl"}
          subStyle={"bg-primary"}
          sub={"Projects"}
          subTitle={"Projects"}
        />
      </div>
      <div className="card_container grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 py-8">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <li className="pro_name mb-4 text-2xl font-medium text-white">
              <span>{project.name}</span>
            </li>
            <ProjectCard project={project} />
            <div className="flex justify-start items-center gap-4 mt-6">
              <div
                className="button px-6 py-3 border-[1px] border-white rounded-full text-white flex gap-2 items-center justify-center cursor-pointer"
              >
                <span>About This website</span>
                <span className="text-lg arrow">
                  <Icons type={"arrow-right"} />
                </span>
              </div>
              <div className="button px-6 py-3 border-[1px] border-white rounded-full text-white flex gap-2 items-center justify-center cursor-pointer">
                <span>Github</span>
                <span className="text-lg arrow">
                  <Icons type={"arrow-right"} />
                </span>
              </div>
              <div className="button px-6 py-3 border-[1px] border-white rounded-full text-white flex gap-2 items-center justify-center cursor-pointer">
                <span>Demo</span>
                <span className="text-lg arrow">
                  <Icons type={"arrow-right"} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Pagination />
      </div>
    </div>
  );
}
