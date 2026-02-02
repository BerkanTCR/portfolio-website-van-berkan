const ProjectCard = ({ project, onShowDetail }) => {
    return (
        
        <section onClick={() => onShowDetail(project.id)} key={project.id}>
            <img className="project-card-image" src={project.image} alt="" />

        </section>

    );
}

export default ProjectCard;