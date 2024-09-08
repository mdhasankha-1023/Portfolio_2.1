import { useLoaderData } from "react-router-dom"
import ProjectCard from "../../UI/ProjectCard/ProjectCard";


export default function Projects() {
  const projects = useLoaderData();

  console.log(projects)



  return (
    <div className="text-center text-5xl text-red-500">
      {
        projects?.map(project => <ProjectCard key={project._id} project={project}/>)
      }
    </div>
  )
}
