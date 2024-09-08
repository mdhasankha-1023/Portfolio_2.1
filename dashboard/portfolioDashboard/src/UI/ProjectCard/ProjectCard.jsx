import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
  const { projectName, summery, projectImage, technologies, _id, demoLink } =
    project;

    const handleDeleteBtn = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
      axios
      .delete(`http://localhost:5000/projects/${_id}`)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      })
      .catch((err) => console.log(err.message));
        }
      });
    }

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={projectImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{projectName}</h2>
        <p>{summery}</p>
        <div className="flex gap-2">
          {technologies?.map((item, index) => (
            <div key={index} className="badge badge-outline">
              {item}
            </div>
          ))}
        </div>
        <div className="card-actions justify-between">
          <button className="btn btn-primary">
            <a href={demoLink} target="_blank">
              Preview
            </a>
          </button>
          <button className="btn btn-primary">
            <Link to={`/update-project/${_id}`}>Update</Link>
          </button>
          <button onClick={handleDeleteBtn} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
