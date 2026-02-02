//importeer je databestand. In dit bestaand heb je een array met objecten. Elk object is een project met een title, description, image
// en welke talen je ervoor hbt gebruikt

import projectsData from "./Data.js";
import ProjectCard from "./ProjectCard";
import { useNavigate } from 'react-router-dom';
const ProjectpaginaContainer = () => {
    const navigate = useNavigate();
    const goToDetail = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <>

            {/* Loop door je databestand, en voor elk proejct laadt je een ProjectCard in. */}
            <div className="frame-container">

                {projectsData.map((project) => (
                    <ProjectCard project={project} onShowDetail={goToDetail} />

                ))}



            </div>

        </>
    );
}

//

export default ProjectpaginaContainer;