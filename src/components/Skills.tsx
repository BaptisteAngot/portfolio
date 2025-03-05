import { Database, Server, Code, Cpu, ShieldCheck, FlaskConical } from "lucide-react";

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, items }) => (
    <div className="bg-slate-700 rounded-xl p-6 transition-transform hover:scale-105">
      <div className="bg-slate-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-emerald-400" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              {item}
            </li>
        ))}
      </ul>
    </div>
);

const Skills: React.FC = () => {
  const skillCategories: SkillCardProps[] = [
    {
      icon: Server,
      title: "Développement Backend",
      items: ["Java Spring Boot", "Node.js", "PHP", "Drools", "JHipster"],
    },
    {
      icon: Code,
      title: "Développement & Gestion d'APIs",
      items: ["REST", "OAuth2", "JWT", "Swagger / OpenAPI"],
    },
    {
      icon: Database,
      title: "Bases de Données",
      items: ["PostgreSQL", "MongoDB", "MySQL", "OVH SwiftStorage", "Amazon S3"],
    },
    {
      icon: Cpu,
      title: "DevOps & Infrastructure",
      items: ["Docker", "Kubernetes", "CI/CD (Jenkins, GitHub Actions)", "OpenShift"],
    },
    {
      icon: FlaskConical,
      title: "Testing & Qualité",
      items: ["JUnit", "Tests E2E", "Newman (CI/CD)", "Postman (Environnements, Scripts, Tests, Runners)"],
    },
    {
      icon: ShieldCheck,
      title: "Sécurité & Performance",
      items: ["ISO 27001 Compliance", "Sécurisation des APIs (OAuth2, JWT, CSP)", "Monitoring (ELK, BetterStack)"],
    },

  ];

  return (
      <section id="skills" className="py-20 bg-slate-900" role="region" aria-labelledby="skills-title">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Compétences Techniques</h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg">
              Expertise approfondie en développement backend, gestion des APIs, DevOps, Testing et sécurité des systèmes.
            </p>
          </div>

          {/* GRID RESPONSIVE POUR UN ALIGNEMENT PARFAIT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
                <SkillCard key={index} icon={category.icon} title={category.title} items={category.items} />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Skills;
