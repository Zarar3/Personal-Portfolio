import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow-foreground">
                About <span className="text-primary">Me</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Software developer & Hardware enthusiast</h3>

                    <p className="text-muted-foreground">
                        As a first year student at the University of Waterloo pursuing a degree in Computer Engineering, I have developed a strong foundation in both software development and hardware systems through my classes.
                        I have gained experience in languages such as C++ and my exposure to hardware concepts through creating a design project using microcontrollers to help assist hospitals to asses those suffering from Hospital Induced Delirium.
                    </p>

                    <p className="text-muted-foreground">
                        Beyond my academic pursuits, I have a passion for full-stack web development and have honed my skills in front-end technologies such as React, Tailwind CSS, and Next.js, as well as back-end technologies like Node.js and Express.js.
                        I enjoy creating dynamic and responsive web applications that provide seamless user experiences.
                        I also have experience utilizing databases such as MongoDB and MySQL to store and manage data effectively.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Contact Me
                        </a>

                        <a
                            href="/ZararKhanResume.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Development</h4>
                                <p>
                                    Proficient in front-end and back-end software development using React, Tailwind CSS, Next.js, Node.js, and Express.js. Experienced with databases like MongoDB and MySQL.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">User Friendly Design</h4>
                                <p>
                                    Skilled in creating intuitive and visually appealing user interfaces using React and Tailwind CSS. Focused on delivering seamless user experiences through responsive design and accessibility best practices.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Projects</h4>
                                <p>
                                    Experienced in developing diverse projects, including a hospital delirium assessment tool using microcontrollers and a full-stack web application for task management. Skilled in both software and hardware development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );

};