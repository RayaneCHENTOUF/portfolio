export const projectsData = [
  {
    id: 1,
    title: "Video CV Analyzer",
    shortDescription: "AI system that extracts structured information from a video CV.",
    detailedDescription: `Development of a web-based platform capable of analyzing a candidate's video CV in order to automatically extract relevant information for recruiters.

The system records or uploads a video, extracts the audio track, transcribes speech and performs semantic analysis to identify skills and mobility information.`,
    features: [
      "Video recording from a browser using WebRTC",
      "Audio extraction from MP4 files using FFmpeg executed with Node.js",
      "Speech-to-text transcription using Mozilla DeepSpeech",
      "Semantic analysis to detect main skills, secondary skills, and geographical mobility",
      "Storage of extracted information in a MySQL database using TypeORM",
      "Video frame processing and person detection using TensorFlow.js"
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "WebRTC",
      "FFmpeg",
      "DeepSpeech",
      "TensorFlow.js",
      "MySQL",
      "TypeORM"
    ],
    screenshot: "video-cv-analyzer.png",
    github: "https://github.com/RayaneCHENTOUF/video-cv-analyzer",
    color: "from-blue-600 to-blue-400"
  },
  {
    id: 2,
    title: "Road Accident Data Analysis Dashboard",
    shortDescription: "Interactive dashboard analyzing road accident risk factors.",
    detailedDescription: `Development of a complete ETL pipeline to analyze road accident datasets from the French public data platform.

Data is collected through an API, cleaned and transformed before being stored in a relational database and visualized through an interactive dashboard.`,
    features: [
      "Data collection from data.gouv.fr API",
      "Data cleaning and transformation using pandas",
      "Storage in a MySQL relational database",
      "SQL queries for analysis",
      "Interactive dashboard built with Streamlit",
      "Visualization of accident risk factors"
    ],
    technologies: [
      "Python",
      "Pandas",
      "SQL",
      "MySQL",
      "Streamlit"
    ],
    screenshot: "accident-dashboard.png",
    github: "https://github.com/RayaneCHENTOUF/Road-Accident-Data-Analysis-Dashboard",
    color: "from-orange-600 to-orange-400"
  },
  {
    id: 3,
    title: "Ecotrack - Weather & Energy Consumption Dashboard",
    shortDescription: "Dashboard analyzing relationships between weather and energy consumption.",
    detailedDescription: `Development of a data analysis dashboard designed to study the correlation between weather indicators and energy consumption.

The system collects meteorological data, processes it and visualizes key indicators related to energy usage patterns.`,
    features: [
      "Data collection from meteorological datasets",
      "Data cleaning and transformation with Python",
      "Data storage and querying with SQL",
      "Statistical analysis of correlations between weather and energy consumption",
      "Interactive data visualization dashboard"
    ],
    technologies: [
      "Python",
      "Pandas",
      "SQL",
      "Data Analysis",
      "Streamlit"
    ],
    screenshot: "weather-energy-dashboard.png",
    github: "https://github.com/RayaneCHENTOUF/weather-energy-dashboard",
    color: "from-green-600 to-green-400"
  },
  {
    id: 4,
    title: "Real-Time Data Streaming Architecture",
    shortDescription: "Streaming data architecture using Kafka and a Data Warehouse.",
    detailedDescription: `Design and implementation of a real-time data streaming architecture allowing ingestion, processing and exposure of analytics data through APIs.

The system uses Kafka for event streaming and integrates both a Data Lake and a relational Data Warehouse.`,
    features: [
      "Real-time data streaming with Kafka and Confluent",
      "Stream processing using KSQLDB",
      "Python consumers for ingestion pipelines",
      "Data Lake + MySQL Data Warehouse architecture",
      "API development with Django REST Framework",
      "Authentication and access control",
      "Real-time metrics generation",
      "Swagger documentation",
      "Docker deployment"
    ],
    technologies: [
      "Kafka",
      "Confluent",
      "KSQLDB",
      "Python",
      "Django REST Framework",
      "MySQL",
      "Apache Beam",
      "Docker"
    ],
    screenshot: "data-streaming-architecture.png",
    github: "https://github.com/RayaneCHENTOUF/streaming-architecture",
    color: "from-purple-600 to-purple-400"
  },
  {
    id: 5,
    title: "Moving Company Website",
    shortDescription: "Corporate website developed for a moving services company.",
    detailedDescription: `Development of a professional website for a moving company allowing clients to discover services, request quotes and contact the company.`,
    features: [
      "Company presentation pages",
      "Services description",
      "Contact form",
      "Responsive design",
      "SEO-friendly structure"
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js"
    ],
    screenshot: "moving-company-website.png",
    github: "https://github.com/RayaneCHENTOUF/moving-company-website",
    color: "from-red-600 to-red-400"
  },
  {
    id: 6,
    title: "School Management System (ENT)",
    shortDescription: "Web platform for managing students, teachers and academic information.",
    detailedDescription: `Development of a web-based school management platform designed for an educational institution in Algeria.

The system allows administrators, teachers and students to manage academic information in a centralized platform.`,
    features: [
      "Student management",
      "Grade management",
      "Attendance tracking",
      "Class schedules",
      "Communication with administration",
      "Teacher and student dashboards"
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "SQL",
      "HTML",
      "CSS"
    ],
    screenshot: "school-ent-system.png",
    github: "https://github.com/RayaneCHENTOUF/school-ent-system",
    color: "from-cyan-600 to-cyan-400"
  },
  {
    id: 7,
    title: "Big Data - Financial Fraud Analysis",
    shortDescription: "Complete fraud detection and analysis platform using Spark, Hadoop, SQLite and Streamlit.",
    detailedDescription: `Complete implementation of a big data pipeline for fraud detection and analysis using Apache Spark and Hadoop.

The system processes CSV data through Bronze/Silver/Gold layers, creates analytical datamarts, exposes results through a REST API and interactive Streamlit dashboard.

Architecture: CSV Source → HDFS (Bronze) → Processing (Silver) → Datamarts (Gold) → API REST & Streamlit`,
    features: [
      "ETL Pipeline with Apache Spark for data ingestion and transformation",
      "4 optimized datamarts for fraud analytics (by type/day, suspicious origins, customer risk, patterns)",
      "HDFS-based data lake with Bronze/Silver/Gold architecture",
      "SQLite database for datamart persistence",
      "REST API with FastAPI for data integration and querying",
      "Interactive Streamlit dashboard for fraud visualization",
      "Complete Docker architecture with Hadoop and Spark clusters",
      "Spark optimization techniques and concurrent processing",
      "Real-time fraud detection and pattern analysis"
    ],
    technologies: [
      "Apache Spark",
      "Hadoop",
      "HDFS",
      "SQLite",
      "FastAPI",
      "Streamlit",
      "Python",
      "Docker",
      "ETL"
    ],
    screenshot: "big-data-fraud-analysis.png",
    github: "https://github.com/RayaneCHENTOUF/Big-Data_Financial-Fraud-Analysis",
    color: "from-teal-600 to-teal-400"
  }
];
