import Pagination from "../../../UI/Pagination/Pagination";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";

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
  return (
    <div className="mx-auto max-w-full lg:max-w-5xl px-14 xl:max-w-7xl 2xl:max-w-[96rem]">
      <div className="my-4">
        <PrimaryTitle
          main={"My Working"}
          mainStyle={"text-4xl"}
          subStyle={"bg-primary"}
          sub={"Projects"}
          subTitle={"Projects"}
        />
      </div>
      <div className="grid grid-cols-3 gap-x-16 gap-y-14 py-8">
        {projects.map((project, index) => (
          <div key={index} className="">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Pagination />
      </div>
    </div>
  );
}
