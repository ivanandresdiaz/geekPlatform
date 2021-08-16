import React from 'react';

const ListarPersonalProjects = (props) => {
  const { personalProjects } = props;
  return (
    <div>
      <h5>Listar mis proyectos personales</h5>
      {personalProjects.length}
      {personalProjects.length > 0 && personalProjects.map((project, index) => (
        <div key={project.projectTitle}>
          <h4>{project.projectTitle}</h4>
          <img src={project.coverProject} alt={project.projectTitle} />
          <a href={project.linkDespliegue} target='_blank' rel='noreferrer'>Link de despliegue</a>
          <a href={project.linkGithub} target='_blank' rel='noreferrer'>Link de github</a>
        </div>
      ))}
    </div>
  );
};

export default ListarPersonalProjects;
