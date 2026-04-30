import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
// Frontend Skills
    {name: "React", level: 85, category: "Frontend"},
    {name: "Tailwind CSS", level: 80, category: "Frontend"},
    {name: "Next.js", level: 75, category: "Frontend"},
    {name: "HTML/CSS", level: 70, category: "Frontend"},
    {name: "Vite", level: 85, category: "Frontend"},
// Backend Skills
    {name: "Node.js", level: 80, category: "Backend"},
    {name: "Express.js", level: 75, category: "Backend"},
    {name: "MongoDB", level: 60, category: "Backend"},
    {name: "MySQL", level: 65, category: "Backend"},
// Programming Languages
    {name: "JavaScript", level: 70, category: "Programming Languages"},
    {name: "Python", level: 75, category: "Programming Languages"},
    {name: "C++", level: 80, category: "Programming Languages"},
    {name: "C#", level: 95, category: "Programming Languages"},
// Tools & Platforms
    {name: "GitHub", level: 70, category: "Tools & Platforms"},
    {name: "VS Code", level: 90, category: "Tools & Platforms"},
    {name: "Arduino IDE", level: 85, category: "Tools & Platforms"},
    {name: "Gemini API", level: 95, category: "Tools & Platforms"},
    {name: "Mobile Development/Design", level: 80, category: "Tools & Platforms"},
    {name: "Railway", level: 75, category: "Tools & Platforms"},
//Hadware Skills
    {name: "Microcontroller Programming", level: 80, category: "Hardware"},
    {name: "Circuit Design", level: 60, category: "Hardware"},
];


const categories = ["all", "Frontend", "Backend", "Programming Languages", "Tools & Platforms", "Hardware"];




export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = activeCategory === "all"
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return(
    <section
    id="skills"
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow-foreground">
                My <span className="text-primary">Skills</span>
            </h2>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-muted-foreground hover:bg-secondary/90"
                    )}>
                        {category}
                    </button>
                ))}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width: skill.level + "%"}}
                        />
                    </div>

                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">
                            {skill.level}%
                        </span>
                    </div>
                    
            </div>
            ))}
        </div>
        </div>



    </section>

    );
};