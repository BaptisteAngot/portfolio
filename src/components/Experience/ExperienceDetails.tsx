import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ExperienceType {
    company: string;
    position: string;
    period: string;
    description: string;
    technologies: string[];
    website?: string; // 🔹 Ajout du champ website (optionnel)
}

interface ExperienceDetailsProps {
    experience: ExperienceType;
}

const ExperienceDetails = ({ experience }: ExperienceDetailsProps) => {
    return (
        <motion.div
            className="md:w-2/3 bg-slate-800 rounded-xl p-6"
            key={experience.company}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                <span className="text-emerald-400 font-mono">{experience.period}</span>
            </div>

            <p className="text-slate-300 mb-6">{experience.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {experience.technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">
            {tech}
          </span>
                ))}
            </div>

            {experience.website && (
                <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                    <ExternalLink size={18} />
                    <span>Visiter le site</span>
                </a>
            )}
        </motion.div>
    );
};

export default ExperienceDetails;