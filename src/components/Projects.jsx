import React from 'react';
import ProjectCard from './target/ProjectCard';

const Projects = () => {
  const projectData = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      imageUrl: 'https://via.placeholder.com/400x250'
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      imageUrl: 'https://via.placeholder.com/400x250'
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      imageUrl: 'https://via.placeholder.com/400x250'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
