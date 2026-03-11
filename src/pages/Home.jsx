import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const allTechs = [...new Set(projectsData.flatMap(p => p.technologies))].sort();

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.technologies.includes(filter));

  return (
    <div className="min-h-screen pb-12">
      {/* Banner Section */}
      <section className="w-full">
        <div className="bg-gray-200 dark:bg-gray-800 overflow-hidden aspect-[19/8]">
          <img 
            src="/portfolio/assets/banner.png" 
            alt="Bannière professionnelle" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-black dark:bg-black my-12">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-50 dark:text-gray-50 uppercase tracking-wide">
            Compétences Techniques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Languages */}
            <div className="bg-white dark:bg-white rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-300 dark:border-gray-300 cursor-pointer">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 text-black dark:text-black">
                Langages
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-700">
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>Python</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>SQL</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>JavaScript</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>TypeScript</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>Java</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="bg-white dark:bg-white rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-300 dark:border-gray-300 cursor-pointer">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 text-black dark:text-black">
                Bases de Données
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-700">
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>MySQL</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>PostgreSQL</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>MariaDB</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>Oracle</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>NoSQL</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="bg-white dark:bg-white rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-300 dark:border-gray-300 cursor-pointer">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 text-black dark:text-black">
                Frameworks
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-700">
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>Django REST</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>FastAPI</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>TensorFlow</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>PyTorch</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>React</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-white rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-300 dark:border-gray-300 cursor-pointer">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 text-black dark:text-black">
                Outils
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-700">
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>Docker</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>Kafka</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>Git</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>Spark</li>
                <li className="flex items-center"><span className="text-black dark:text-black mr-2">▸</span>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Filters */}
      <section className="section-container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-50 dark:text-gray-50 uppercase tracking-wide">
          Projets
        </h2>

        {/* Filter Section */}
        <div className="mb-16">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="mx-auto block px-6 py-3 bg-white dark:bg-white text-black dark:text-black rounded-lg font-semibold mb-6 transition-all duration-300 hover:shadow-lg"
          >
            {isFilterOpen ? '▲ Masquer les filtres' : '▼ Afficher les filtres'}
          </button>

          {isFilterOpen && (
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => { setFilter('all'); setIsFilterOpen(false); }}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm uppercase tracking-wide ${
                  filter === 'all'
                    ? 'bg-white dark:bg-white text-black dark:text-black shadow-lg'
                    : 'bg-white dark:bg-white text-black dark:text-black border border-gray-300 dark:border-gray-300 hover:shadow-lg'
                }`}
              >
                Tous ({projectsData.length})
              </button>
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => { setFilter(tech); setIsFilterOpen(false); }}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm uppercase tracking-wide ${
                    filter === tech
                      ? 'bg-white dark:bg-white text-black dark:text-black shadow-lg'
                      : 'bg-white dark:bg-white text-black dark:text-black border border-gray-300 dark:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-300 dark:text-gray-300 text-lg">
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

      {/* Call to Action */}
      <section className="section-container py-20 mt-12">
        <div className="bg-black dark:bg-black rounded-lg border border-gray-700 dark:border-gray-700 p-12 text-center hover:shadow-2xl hover:border-gray-500 transition-all duration-300 cursor-pointer">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-white uppercase tracking-wide">
            Contactez-moi
          </h2>
          <p className="text-gray-300 dark:text-gray-300 mb-12">
            Contactez-moi par email, LinkedIn ou GitHub
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a href="mailto:rayane.ch2209@gmail.com" className="flex flex-col items-center space-y-3 p-6 bg-white dark:bg-white rounded-lg border border-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="text-4xl">📧</span>
              <div>
                <p className="text-black font-semibold">Email</p>
                <p className="text-gray-700 text-sm">rayane.ch2209@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/rayan-chentouf-312249348" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-3 p-6 bg-white dark:bg-white rounded-lg border border-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="text-4xl">💼</span>
              <div>
                <p className="text-black font-semibold">LinkedIn</p>
                <p className="text-gray-700 text-sm">Rayan Chentouf</p>
              </div>
            </a>
            
            <a href="https://github.com/RayaneCHENTOUF" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-3 p-6 bg-white dark:bg-white rounded-lg border border-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="text-4xl">🐙</span>
              <div>
                <p className="text-black font-semibold">GitHub</p>
                <p className="text-gray-700 text-sm">RayaneCHENTOUF</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
