/* eslint-disable react/prop-types */

export default function ProjectCard({project}) {
  return (
    <div className="w-full overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
      {/* <!-- Image --> */}
      <figure>
        <img
          src="https://picsum.photos/id/493/800/600"
          alt="card image"
          className="aspect-video w-full"
        />
      </figure>
      {/* <!-- Body--> */}
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-medium text-slate-700">
            {project.name}
          </h3>
        </header>
        <p>
          Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries +
          Granola + Honey.
        </p>
      </div>
      {/* <!-- Action base sized basic button --> */}
      <div className="flex justify-start p-2 pt-0">
        Live Demo
      </div>
    </div>
  );
}
