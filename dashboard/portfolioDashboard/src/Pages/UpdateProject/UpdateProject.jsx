import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateProject() {
  const project = useLoaderData();
  const { projectName, projectImage, demoLink, summery, technologies, _id } =
    project;

  const handleUpdateProjectBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const projectName = form.proName.value;
    const projectImage = form.proImage.value;
    const demoLink = form.demoLink.value;
    // const usedTechnologies = form.technologies.value;
    const summery = form.proSummery.value;
    const formData = {
      projectName,
      projectImage,
      demoLink,
      technologies,
      summery,
    };
    console.log(formData);

    const updateProject = async () => {
      await axios
        .put(`http://localhost:5000/projects/${_id}`, formData)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "Successful",
              text: "Successfully updated this project info",
              icon: "success",
            });
          }
        })
        .catch((err) => console.log(err.message));
    };

    updateProject();
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleUpdateProjectBtn}>
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
                    defaultValue={projectName}
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
                    defaultValue={projectImage}
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
                  defaultValue={demoLink}
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
                  defaultValue={technologies}
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
                  defaultValue={summery}
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary uppercase">
                  Update Info
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
