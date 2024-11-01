import React from "react"
import project_1 from "../../public/project_1.png"
import project_2 from "../../public/project_2.png"
import project_3 from "../../public/project_3.png"

const Project = ({id}) => {
  function Project(img, name) {
    return (
      <div className="w-1/4 h-fit shadow-lg rounded-lg">
        <img src={img} alt={name} />
        <h3 className="text-center text-lg m-5">{name}</h3>
      </div>
    );
  }
  return (
    <div id={id} className="p-24 flex-wrap justify-center space-y-10">
      <h1 className="font-semibold text-5xl text-center">
        My <span className="text-gray-500">Project</span>
      </h1>
      <div id="projects" className="flex justify-center items-center space-x-5">
        {Project(project_1, "sewajeepdieng.id")}
        {Project(project_2, "chirper with Laravel")}
      </div>
    </div>
  );
};

export default Project;
