import { useEffect, useState } from "react";

interface ExperienceType {
    company: string;
    position: string;
    period: string;
    description: string;
    technologies: string[];
    icon: React.ElementType;
}

interface TimelineProps {
    experiences: ExperienceType[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const Timeline = ({ experiences, activeIndex, setActiveIndex }: TimelineProps) => {
    const [progressWidth, setProgressWidth] = useState("0%");

    useEffect(() => {
        setProgressWidth(`${(activeIndex / (experiences.length - 1)) * 100}%`);
    }, [activeIndex]);

    return (
        <div className="mt-16 relative">
            <div className="absolute left-0 right-0 h-0.5 top-5 bg-slate-700">
                <div
                    className="h-full bg-emerald-500 transition-all duration-500 ease-in-out"
                    style={{ width: progressWidth }}
                ></div>
            </div>

            <div className="relative flex justify-between">
                {experiences.map((exp, index) => {
                    const Icon = exp.icon; // 🔹 Récupération de l’icône associée

                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300 ease-in-out ${
                                index <= activeIndex
                                    ? "bg-emerald-500 scale-110 shadow-md"
                                    : "bg-slate-700 hover:bg-emerald-400"
                            }`}
                            >
                                <Icon size={24} className="text-white" />
                            </div>
                            <div className="text-center mt-2">
                                <div className="text-xs text-slate-400">{exp.period.split(" - ")[0]}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;