import { Tags, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Adaptatype",
        description: "A real-time adaptive typing trainer that analyzes user mistakes and dynamically generates practice strings targeting weak characters, patterns, and word combinations.",
        images: ["/projects/adaptatype.png"],
        tags: ["TypeScript", "React", "Tailwind CSS", "Vite", "Node.js", "Express.js"],
        githubUrl: "https://github.com/Zarar3/adapta-type",
    },
    {
        id: 2,
        title: "Hospital Delirium Assessment Tool",
        description: "Developed a microcontroller-based tool to assist hospitals in assessing patients for Hospital Induced Delirium, enhancing patient care and monitoring.",
        images: ["/projects/HID Pic.png"],
        tags: ["C++", "Microcontrollers", "Embedded Systems"],
        githubUrl: "https://github.com/Zarar3/Hospital-Induced-Delirium-Screening-Device",
    },

    {
        id: 3,
        title: "Full-Stack Sport Practicing Web Application",
        description: "Created a full-stack web application to help users practice and improve their sports skills through comparing videos of their own form in a selected sports to the best athletes in each respective sport.",
        images: [
            "/projects/Screenshot 2025-12-16 213644.png",
            "/projects/Screenshot 2025-12-16 215526.png",
            "/projects/Screenshot 2025-12-16 215602.png"
        ],
        tags: ["React", "Node.js", "Express.js", "Tailwind CSS", "Gemini API", "Python", "Vite"],
        githubUrl: "https://github.com/Zarar3/ShadowSync",
    },

    {
        id: 4,
        title: "LogDay",
        description: " LogDay is a full-stack web application designed to help users track and manage their daily activities, habits, and goals. It provides an intuitive interface for logging various aspects of daily life, such as exercise routines, meal plans, work tasks, and personal reflections. With features like customizable dashboards, data visualization, and goal-setting tools, LogDay empowers users to stay organized, motivated, and mindful of their daily progress.",
        images: [
            "/projects/Logday.png"
        ],
        tags: ["React", "Node.js", "Express.js", "JavaScript","Tailwind CSS", "Vite", "PostgreSQL", "Prisma", "Mobile Development/Design", "Railway"],
        githubUrl: "https://github.com/Zarar3/LogDay",
    },
];








const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="group bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] min-w-[380px] md:min-w-[450px] h-[520px] flex flex-col">
            <div className="h-[280px] overflow-hidden relative bg-gradient-to-br from-primary/5 to-purple-500/5">
                <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        index === currentImageIndex ? 'bg-white w-8' : 'bg-white/40 w-1.5'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1.5 bg-primary/20 text-primary text-xs rounded-full border border-primary/30 font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
                <a href={project.githubUrl} className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-2 group/link">
                    View Project
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured
                        <span className="text-primary"> Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Some of my recent work showcasing full-stack development and embedded systems
                    </p>
                </div>

                <div className="relative">
                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent hover:scrollbar-thumb-primary/50 px-4 -mx-4">
                        {projects.map((project) => (
                            <div key={project.id} className="snap-center">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};