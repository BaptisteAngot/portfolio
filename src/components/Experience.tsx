import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ExperienceList from "./Experience/ExperienceList.tsx";
import ExperienceDetails from "./Experience/ExperienceDetails.tsx";
import Timeline from "./Experience/Timeline.tsx";
import { AnimatePresence } from "framer-motion";
import { Briefcase, Server, Database, Code, ShoppingBag } from "lucide-react";

const experiences = [
  {
    company: "Freelance",
    position: "Auto-entrepreneur",
    period: "Fév 2024 - Aujourd’hui",
    description: "Formateur en développement, gestion de projets et DevOps. Jury d’examen habilité 'Développeur Web et Web Mobile'.",
    technologies: ["Docker", "DevOps", "Gestion de projet", "Formation"],
    icon: Briefcase,
    website: "https://www.angotbaptiste.com",
  },
  {
    company: "SPB",
    position: "Développeur Full-Stack",
    period: "Nov 2023 - Aujourd’hui",
    description: "Développement d'une solution de création d’extranet de déclaration de sinistre automatisé avec règles métiers.",
    technologies: ["Java Spring", "React", "Drools", "OAuth2", "JWT", "ELK", "OpenShift", "Jenkins"],
    icon: Server,
    website: "https://www.spb.eu",
  },
  {
    company: "TROP-PLUS",
    position: "Développeur Back-End",
    period: "Oct 2020 - Oct 2023",
    description: "Développement de projets sous Java Spring avec Vue.js, gestion des bases de données MongoDB et intégration cloud.",
    technologies: ["Java Spring", "Vue.js", "MongoDB", "Amazon S3", "OVH SwiftStorage", "Rancher", "Docker", "Jenkins"],
    icon: Database,
    website: "https://www.tropevent.com/",
  },
  {
    company: "Opteam Interactive",
    position: "Développeur Web",
    period: "Mars 2020 - Juil 2020",
    description: "Développement d'un CRM en PHP natif et avec Materialize CSS, permettant la gestion des clients.",
    technologies: ["PHP", "Materialize CSS", "MySQL"],
    icon: Code,
    website: "https://luckycrm.fr/",
  },
  {
    company: "Parfum Berry",
    position: "Développeur Web",
    period: "Mai 2019 - Juin 2019",
    description: "Refonte du site web sous Prestashop et transition numérique avec des campagnes Instagram.",
    technologies: ["Prestashop", "Marketing Digital", "Instagram Ads"],
    icon: ShoppingBag,
    website: "http://maisondeparfumberry.com/",
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeIndex < experiences.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
      <section
          id="experience"
          className="py-20 bg-slate-900"
          role="region"
          aria-labelledby="experience-title"
          {...handlers} // 🔹 Appliquer le swipe à toute la section
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Expériences Professionnelles
            </h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg">
              Mon parcours en tant que développeur backend, spécialiste API et formateur.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <ExperienceList
                  experiences={experiences}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
              />
              <AnimatePresence mode="wait">
                <ExperienceDetails key={activeIndex} experience={experiences[activeIndex]} />
              </AnimatePresence>
            </div>

            <Timeline
                experiences={experiences}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
      </section>
  );
};

export default Experience;