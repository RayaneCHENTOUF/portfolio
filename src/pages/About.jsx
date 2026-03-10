import { useState } from 'react';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(false);
  const [expandedFormation, setExpandedFormation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:rayane.ch2209@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'rayane.ch2209@gmail.com',
            href: 'mailto:rayane.ch2209@gmail.com'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'Rayan Chentouf',
            href: 'https://www.linkedin.com/in/rayan-chentouf-312249348'
        },
        {
            icon: '🐙',
            label: 'GitHub',
            value: 'RayaneCHENTOUF',
            href: 'https://github.com/RayaneCHENTOUF'
        }
    ];

  const skillCategories = [
    {
      title: 'Langages',
      icon: '🔤',
      skills: ['Python', 'SQL', 'JavaScript / TypeScript', 'Java', 'C / C++']
    },
    {
      title: 'Bases de Données',
      icon: '🗄️',
      skills: ['MySQL', 'PostgreSQL', 'MariaDB', 'Oracle', 'NoSQL']
    },
    {
      title: 'Frameworks',
      icon: '🏗️',
      skills: ['Django REST Framework', 'FastAPI', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Outils & Technologies',
      icon: '🛠️',
      skills: ['Docker', 'Git', 'CI/CD', 'Spark', 'Kafka']
    }
  ];

  const interests = [
    'Ingénierie des Données',
    'Machine Learning',
    'Pipelines Temps Réel',
    'Analyse de Données',
    'Développement Backend'
  ];

  const experiences = [
    {
      id: 1,
      title: 'Architecture de Systèmes de Données',
      description: 'Conception et implémentation de pipelines de données scalables, architecture de data lakes et construction de systèmes de streaming temps réel avec Kafka et Spark.'
    },
    {
      id: 2,
      title: 'Machine Learning',
      description: 'Développement de modèles IA pour l\'analyse de vidéos, analyse sémantique et détection de personnes utilisant TensorFlow.js et frameworks de deep learning.'
    },
    {
      id: 3,
      title: 'Développement Full-Stack',
      description: 'Création d\'applications web réactives avec React et Node.js, construction de REST APIs et développement de systèmes de gestion web.'
    }
  ];

  const formations = [
    {
      id: 1,
      title: 'Licence Informatique',
      institution: 'Université de Pau et des Pays de l\'Adour',
      period: '2022 - 2025',
      description: 'Fondations solides en informatique théorique et pratique',
      details: 'Programmation • Algorithmes • Bases de Données • Systèmes d\'Exploitation • Développement Web'
    },
    {
      id: 2,
      title: 'Data Engineering & IA',
      institution: 'Spécialisation avancée',
      period: 'En Cours',
      description: 'Étude avancée en ingénierie des données, systèmes ML et architectures temps réel',
      details: 'Pipelines • ETL • Design de Bases de Données • Architecture ML • Plateformes Cloud'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">

      {/* Header */}
      <section className="section-container py-12 md:py-20">
        <div className="text-center mb-16 animate-slideUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-50 dark:text-gray-50 uppercase tracking-wide">
            À Propos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Étudiant Data Engineering & IA | Résolveur de Problèmes | Constructeur
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-container py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="flex justify-center order-2 lg:order-1">
            <img 
              src="/portfolio/assets/description.png" 
              alt="Photo de profil"
              className="w-80 h-80 rounded-lg object-cover shadow-xl"
            />
          </div>

          {/* Bio Text */}
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed font-medium">
              Étudiant en Ingénierie des Données et IA passionné par la construction de systèmes scalables et d'applications intelligentes qui transforment les données en valeur.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Spécialisé dans la conception de pipelines temps réel, systèmes ETL et architectures de machine learning. Expérience avec les stacks de données modernes incluant Kafka, Spark et les plateformes cloud.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Capacités full-stack couvrant le développement backend, l'optimisation des bases de données et la visualisation de données.
            </p>

            {/* Interests */}
            <div className="pt-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-gray-600 dark:text-gray-400 mb-4">
                Domaines de Spécialisation
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-2 bg-white dark:bg-white text-black dark:text-black rounded text-sm font-medium border border-gray-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Formation Side by Side */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <button
              onClick={() => setExpandedExperience(!expandedExperience)}
              className="flex items-center justify-between w-full mb-8 cursor-pointer hover:opacity-75 transition-opacity duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-50 dark:text-gray-50 uppercase tracking-wide">
                Expérience
              </h2>
              <span className={`text-3xl transition-transform duration-300 ${expandedExperience ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {expandedExperience && (
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white dark:bg-white rounded-lg border border-gray-300 dark:border-gray-300 p-6 hover:shadow-xl hover:scale-102 transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="text-lg font-bold text-black dark:text-black mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-700 leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Formation Column */}
          <div>
            <button
              onClick={() => setExpandedFormation(!expandedFormation)}
              className="flex items-center justify-between w-full mb-8 cursor-pointer hover:opacity-75 transition-opacity duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-50 dark:text-gray-50 uppercase tracking-wide">
                Formation
              </h2>
              <span className={`text-3xl transition-transform duration-300 ${expandedFormation ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {expandedFormation && (
              <div className="space-y-4">
                {formations.map((form) => (
                  <div
                    key={form.id}
                    className="bg-white dark:bg-white rounded-lg border border-gray-300 dark:border-gray-300 p-6 hover:shadow-xl hover:scale-102 transition-all duration-300 cursor-pointer"
                  >
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-black dark:text-black">
                        {form.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-600 mt-1">
                        {form.institution}
                      </p>
                      <span className="text-xs uppercase tracking-widest font-bold text-gray-600 dark:text-gray-600 mt-2 inline-block">
                        {form.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-700 text-xs mb-3 pt-3 border-t border-gray-300 dark:border-gray-300">
                      {form.description}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-600">
                      <strong>Focus:</strong> {form.details}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section - Top */}
      <section className="section-container py-12">
        <div className="bg-black dark:bg-black rounded-lg border border-gray-700 dark:border-gray-700 p-12 text-center hover:shadow-2xl hover:border-gray-500 transition-all duration-300 cursor-pointer">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-white uppercase tracking-wide">
            Tous Un Message?
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
