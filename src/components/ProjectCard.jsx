import { Link } from 'react-router-dom';
import TechBadge from './TechBadge';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-white dark:bg-white rounded-xl overflow-hidden border border-gray-300 dark:border-gray-300 h-full flex flex-col hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-lg font-bold mb-3 text-black dark:text-black leading-tight">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-gray-700 dark:text-gray-700 mb-4 flex-grow line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Technologies - More compact */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-200 text-gray-800 dark:text-gray-800 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="inline-block px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-600">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Footer - GitHub Link */}
          <div className="pt-4 border-t border-gray-300 dark:border-gray-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-black hover:text-gray-600 dark:hover:text-gray-600 font-semibold text-sm transition-colors duration-300 uppercase tracking-wide"
              onClick={(e) => e.stopPropagation()}
            >
              View Code →
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
