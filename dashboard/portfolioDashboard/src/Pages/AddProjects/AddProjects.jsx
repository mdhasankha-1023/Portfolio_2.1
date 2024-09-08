import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


export default function AddProjects() {
  const [technologies, setTechnologies] = useState([]);

  const handleAddProjectBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const projectName = form.proName.value;
    const projectImage = form.proImage.value;
    const demoLink = form.demoLink.value;
    const usedTechnologies = form.technologies.value;
    const summery = form.proSummery.value;
    setTechnologies(preTechnologies => [...preTechnologies, ...usedTechnologies.split(',').map(tech => tech.trim())])

    const formData = {
      projectName,
      projectImage,
      demoLink,
      technologies,
      summery,
    };

    const postProject = async()=> {
      await axios.post('http://localhost:5000/projects', formData)
      .then(res => {
        if(res.status === 201){
          form.reset();
          setTechnologies([]);
          Swal.fire({
            title: "Successful",
            text: "Successfully added this project",
            icon: "success"
          });
        }
      })
      .catch(err => console.log(err.message))
    }

    postProject();

    console.log(formData);
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleAddProjectBtn}>
              <div className="w-full flex flex-col lg:flex-row gap-6">
                <div className="form-control w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text">Project Name</span>
                  </label>
                  <input
                    name="proName"
                    type="text"
                    placeholder="Project Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text">Project Image</span>
                  </label>
                  <input
                    name="proImage"
                    type="text"
                    placeholder="Project Image"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Demo Link</span>
                </label>
                <input
                  name="demoLink"
                  type="text"
                  placeholder="Demo Link"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Technologies</span>
                </label>
                <input
                  name="technologies"
                  type="text"
                  placeholder="Used technologies"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Summery</span>
                </label>
                <textarea
                  name="proSummery"
                  className="textarea textarea-bordered h-[150px]"
                  placeholder="Write project Summery..."
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary uppercase">
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
