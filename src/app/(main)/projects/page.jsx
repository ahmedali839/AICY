
import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the first project. Highlighting the key features and technologies used.',
    imageUrl: '/project1.jpg', // Replace with your image
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the second project. Highlighting the key features and technologies used.',
    imageUrl: '/project2.jpg', // Replace with your image
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of the third project. Highlighting the key features and technologies used.',
    imageUrl: '/project3.jpg', // Replace with your image
    link: '#',
  },
  {
    title: 'Project Four',
    description: 'A brief description of the fourth project. Highlighting the key features and technologies used.',
    imageUrl: '/project4.jpg', // Replace with your image
    link: '#',
  },
];

const ProjectsPage = () => {
  return (
    <div className="bg-background text-text-primary font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading">Our Projects</h1>
          <p className="text-text-secondary mt-2">A collection of our recent work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 font-heading">{project.title}</h2>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <a href={project.link} className="text-primary font-bold hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
