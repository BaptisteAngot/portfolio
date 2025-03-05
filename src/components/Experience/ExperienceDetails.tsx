interface ExperienceDetailsProps {
    experience: any;
}

const ExperienceDetails = ({ experience }: ExperienceDetailsProps) => {
    return (
        <div className="md:w-2/3 bg-slate-800 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                <span className="text-emerald-400 font-mono">{experience.period}</span>
            </div>

            <p className="text-slate-300 mb-6">{experience.description}</p>

            <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech: string, index: number) => (
                    <span
                        key={index}
                        className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded"
                    >
            {tech}
          </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceDetails;
