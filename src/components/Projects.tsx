import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

// Définition du type Project pour éviter l'erreur TS7031
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

// Liste des projets
const projects: Project[] = [
  {
    title: "E-commerce Microservices",
    description: "Une architecture microservices évolutive pour les plateformes e-commerce, traitant des millions de transactions avec haute disponibilité.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Microservices", "Node.js", "Kubernetes", "MongoDB", "Redis"],
    github: "#",
    demo: "#",
    category: "Architecture"
  },
  {
    title: "Real-time Analytics API",
    description: "API performante pour l'analyse de données en temps réel, traitant plus de 10 000 requêtes/seconde avec une latence inférieure à 50 ms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Go", "Kafka", "Elasticsearch", "GraphQL", "Docker"],
    github: "#",
    demo: "#",
    category: "API"
  }
];

// Composant ProjectCard avec typage correct (évite TS7031)
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-slate-800 rounded-xl overflow-hidden transition-all hover:shadow-emerald-500/10 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-slate-300 mb-4 h-20 overflow-hidden">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag: string, index: number) => (
              <span key={index} className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">
            {tag}
          </span>
          ))}
          {project.tags.length > 3 && (
              <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">
            +{project.tags.length - 3}
          </span>
          )}
        </div>
        <div className="flex gap-3">
          <a
              href={project.github}
              className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          <a
              href={project.demo}
              className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Démo</span>
          </a>
        </div>
      </div>
    </div>
);

// Composant Projects
const Projects: React.FC = () => {
  const categories: string[] = ["All", "API", "Architecture", "Database", "Infrastructure", "Security", "IoT"];
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All"
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
      <section id="projects" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Mes Projets</h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg">
              Une sélection de mes projets en développement backend et en architecture système.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category: string) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                >
                  {category}
                </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project, index: number) => (
                <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
                href="#"
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Voir tous les projets
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
  );
};

export default Projects;
