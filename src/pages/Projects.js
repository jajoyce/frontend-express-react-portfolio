import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Projects() {
    const URL = useOutletContext();
    const [projects, setProjects] = useState(null);

    const getProjectsData = async () => {
        const response = await fetch(URL + "projects");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => getProjectsData(), []);

    const loaded = () => {
        return projects.map((project) => (
            <div className="project-div">
                <h1>{project.name}</h1>
                <img
                    src={project.image}
                    alt={project.name + "screeenshot"}
                    className="project-img"
                /><br />
                <a href={project.git} target="_blank">
                    <button>GitHub</button>
                </a>
                <a href={project.live} target="_blank">
                    <button>Live Site</button>
                </a>
            </div>
        ));
    };

    return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
