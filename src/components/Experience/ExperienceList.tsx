interface ExperienceListProps {
    experiences: any[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const ExperienceList = ({
                            experiences,
                            activeIndex,
                            setActiveIndex,
                        }: ExperienceListProps) => {
    return (
        <div className="md:w-1/3">
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-0 md:space-y-1">
                {experiences.map((exp, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`py-3 px-4 text-left whitespace-nowrap md:whitespace-normal rounded-lg transition-colors ${
                            activeIndex === index
                                ? "bg-slate-700 text-emerald-400 font-medium"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`}
                    >
                        {exp.company}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ExperienceList;
