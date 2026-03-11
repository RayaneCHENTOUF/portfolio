import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/RayaneCHENTOUF',
      icon: '🐙'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rayan-chentouf-312249348',
      icon: '💼'
    },
    {
      label: 'Email',
      url: 'mailto:rayane.ch2209@gmail.com',
      icon: '✉️'
    }
  ];

  const footerLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À Propos' }
  ];

  return (
    <footer className="bg-black dark:bg-gray-900 border-t border-gray-700 dark:border-gray-800 mt-20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">RC</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Software & Data engineer 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Liens Rapides
            </h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-50">
              contactez-moi
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-white flex items-center justify-center text-lg text-black hover:bg-gray-200 dark:hover:bg-gray-200 transition-colors duration-300"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Rayan Chentouf. Tous droits réservés.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
           
          </p>
        </div>
      </div>
    </footer>
  );
}
