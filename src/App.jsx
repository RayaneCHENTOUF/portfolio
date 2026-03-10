import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

export default function App() {
  return (
    <Router basename="/portfolio">
      <div className="flex flex-col min-h-screen bg-black dark:bg-gray-950 text-gray-50 dark:text-gray-50 transition-colors duration-300">
        <Navbar />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
