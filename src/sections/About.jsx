import {Code2, Lightbulb, Rocket, Users} from 'lucide-react';

const highlights = [
    {
        icon: Code2,
        title: "Clean code",
        description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Staying ahead with the latest technologies and best practices.",
    },
]

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grind lg:grid-cols-2 gap-16 items-center">
                {/* left column */}
                <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        About Me
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Building the future,
                    <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        I am a passionate Information Technology student currently gaining hands-on experience through academic projects and internship training. 
                        My journey started with a curiosity about how websites and applications work, which gradually developed into a strong interest in modern web development and software technologies. 
                        I continuously strive to improve my skills, build meaningful digital solutions, and grow as a future software developer.
                    </p>
                    <p>
                        I have experience working with modern technologies such as React, TypeScript, and related web development tools, 
                        building projects ranging from responsive landing pages to functional web applications. 
                        I focus on writing clean, organized code while paying attention to design, usability, and overall user experience.
                    </p>
                    <p>
                        When I’m not coding, I spend my time learning new technologies, 
                        practicing my skills through small projects, 
                        and exploring ways to improve my knowledge in web development.
                    </p>
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "My mission is to create digital experiences that are not just
                         functional, but truly delightful — products that users love to
                         use and developers love to maintain."
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item,idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                            style={{animationDelay: `${(idx + 1 )* 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
            </div>
            </div>
            
        </div>
    </section>

    );
};