import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import TechBadge from '../components/TechBadge';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">
            Projet Non Trouvé
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Le projet que vous recherchez n'existe pas.
          </p>
          <Link to="/projects" className="btn-primary">
            Retour aux Projets
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = projectsData[project.id - 2];
  const nextProject = projectsData[project.id];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <section className="section-container py-12 md:py-20">
        {/* Back Button */}
        <Link
          to="/#projects"
          className="inline-flex items-center space-x-2 text-gray-400 dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-200 font-semibold mb-12 transition-colors duration-300 text-sm uppercase tracking-wide"
        >
          <span>←</span>
          <span>Retour aux Projets</span>
        </Link>

        {/* Project Header */}
        <div className="mb-16">
          {/* Screenshot Placeholder */}
          <div className={`w-full h-80 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center text-6xl opacity-85 mb-12 shadow-lg`}>
            📸
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-50 uppercase tracking-tight">
            {project.title}
          </h1>

          {/* Short Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {project.shortDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Voir sur GitHub
            </a>
            <button className="btn-secondary">
              Voir la Démo Live
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50 uppercase tracking-wide">
                Aperçu
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50 uppercase tracking-wide">
                Fonctionnalités
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-white dark:bg-white flex items-center justify-center text-black dark:text-black text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm pt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Technologies */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-4 text-gray-700 dark:text-gray-300">
                Stack Technique
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-4 text-gray-700 dark:text-gray-300">
                Infos Projet
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-600 dark:text-gray-400 mb-2">
                    Statut
                  </p>
                  <p className="text-sm text-gray-900 dark:text-gray-50">Complété</p>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-600 dark:text-gray-400 mb-2">
                    Référentiel
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold break-all transition-colors"
                  >
                    Voir sur GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 dark:border-gray-800 pt-16 mt-16">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="group"
            >
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                ← Projet Précédent
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {prevProject.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="group md:text-right"
            >
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Projet Suivant →
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back to Projects */}
        <div className="mt-12 text-center">
          <Link to="/#projects" className="inline-flex px-6 py-2 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
            Voir tous les Projets
          </Link>
        </div>
      </section>
    </div>
  );
}
