import { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const allTechs = [...new Set(projectsData.flatMap(p => p.technologies))].sort();

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.technologies.includes(filter));

  return (
    <div className="min-h-screen pt-20 pb-12">
      <section className="section-container py-12 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-50 uppercase tracking-wide">
            Projets
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Travaux en ingénierie des données, machine learning et développement full-stack
          </p>
        </div>

        {/* Filter Section - Improved */}
        <div className="mb-16">
          <h3 className="text-xs uppercase tracking-widest font-bold text-gray-600 dark:text-gray-400 mb-6">
            Filtrer par Technologie
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-3 rounded-lg font-semibold transition-all duration-300 text-sm uppercase tracking-wide ${
                filter === 'all'
                  ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              Tous les Projets ({projectsData.length})
            </button>
            {allTechs.map((tech) => {
              const count = projectsData.filter(p => p.technologies.includes(tech)).length;
              return (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-5 py-3 rounded-lg font-semibold transition-all duration-300 text-sm uppercase tracking-wide ${
                    filter === tech
                      ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Aucun projet trouvé avec <strong>{filter}</strong>
              </p>
            </div>
          )}
        </div>

        {/* Results Count */}
        {filteredProjects.length > 0 && (
          <div className="text-center text-gray-500 dark:text-gray-500 text-sm">
            {filteredProjects.length} sur {projectsData.length} projets
          </div>
        )}
      </section>
    </div>
  );
}
