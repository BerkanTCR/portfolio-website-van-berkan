import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../components/Data.js';

const projectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [projectList, setprojectList] = useState(projectsData);

    // Zoek het juiste project
    const project = projectList.find(p => p.id === Number(projectId));

    if (!project) {
        return <div>project niet gevonden!</div>;
    }

    return (
        <>

            <section className="terug-layout">
                <button className="projectdetail-button" onClick={() => navigate('/Projectpagina')}>
                    <img className="arrow" src="../images/arrow.jpg" alt="" />
                </button>
            </section>

            <div className="project-card-layout">
                <img src={project.image} alt="" />
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div >

        </>
    );
};

export default projectDetail;