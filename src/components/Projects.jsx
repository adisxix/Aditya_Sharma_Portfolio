import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ArrowLeft, Wand2, Layers, Component, BarChart2 } from 'lucide-react';

const Github = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    </svg>
);

const getTechIcon = (techName) => {
    const name = techName.toLowerCase().trim();
    
    // Devicon & Simpleicons mapping
    if (name === 'react.js') {
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="" className="w-3.5 h-3.5 object-contain" />;
    }
    if (name === 'tailwind css') {
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="" className="w-3.5 h-3.5 object-contain" />;
    }
    if (name === 'supabase') {
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="" className="w-3.5 h-3.5 object-contain" />;
    }
    if (name === 'clerk') {
        return <img src="https://avatars.githubusercontent.com/u/49538330?s=200&v=4" alt="" className="w-3.5 h-3.5 rounded-full object-contain" />;
    }
    if (name === 'shadcn ui') {
        return (
            <svg viewBox="0 0 256 256" className="w-3.5 h-3.5 text-white stroke-current fill-none">
                <path strokeWidth="25" strokeLinecap="round" d="M208 128l-80 80M192 40L40 192"/>
            </svg>
        );
    }
    if (name === 'recharts') {
        return <BarChart2 className="w-3.5 h-3.5 text-green-400" />;
    }
    if (name === 'gemini ai' || name === 'google fonts') {
        return <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg" alt="" className="w-3.5 h-3.5 object-contain invert" />;
    }
    if (name === 'magic ui') {
        return <Wand2 className="w-3.5 h-3.5 text-yellow-400" />;
    }
    if (name === 'html') {
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="" className="w-3.5 h-3.5 object-contain" />;
    }
    if (name === 'css') {
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="" className="w-3.5 h-3.5 object-contain" />;
    }
    if (name === 'javascript') {
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="" className="w-3.5 h-3.5 object-contain" />;
    }
    if (name === 'chatgpt ai') {
        return <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" alt="" className="w-3.5 h-3.5 object-contain invert" />;
    }
    if (name === 'deepseek ai') {
        return <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deepseek.svg" alt="" className="w-3.5 h-3.5 object-contain invert" />;
    }
    if (name === 'ui verse') {
        return <Layers className="w-3.5 h-3.5 text-blue-400" />;
    }
    
    // Default fallback icon
    return <Component className="w-3.5 h-3.5 text-gray-400" />;
};

import { projectsData } from '../data/projects';

const ProjectCard = ({ project }) => {
    return (
        <div className="relative group bg-black/40 backdrop-blur-md rounded-xl border border-white/10 hover:border-[var(--accent-color)]/50 transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]">

            {/* Top Status Bar */}
            <div className="flex items-center px-4 py-2 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5 mr-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-xs text-gray-400 truncate">
                    {project.liveLinkText}
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 font-sans leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 border border-white rounded text-xs font-mono text-gray-300 flex items-center gap-1.5">
                            {getTechIcon(t)}
                            <span>{t}</span>
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-mono text-gray-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-mono text-gray-400 hover:text-[var(--accent-color)] transition-colors">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                    </a>
                </div>
            </div>

            {/* Hover top beam effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

export function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps'
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="projects" className="relative min-h-screen py-16 sm:py-20 md:py-24 flex flex-col justify-center overflow-hidden">

            {/* Background styling for Neon Dark Room */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-color)]/5 to-transparent pointer-events-none opacity-50" />
            <div className="absolute inset-0 scanlines opacity-30" />

            <div className="container mx-auto px-4 sm:px-6 z-10 max-w-7xl">
                <div className="relative flex items-center justify-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-white">
                            PROJECTS
                        </h2>
                    </motion.div>

                    <div className="absolute right-0 hidden md:flex gap-4">
                        <button onClick={scrollPrev} className="p-3 rounded-full border border-white/10 hover:border-[var(--accent-color)] text-white hover:text-[var(--accent-color)] transition-colors bg-white/5 backdrop-blur-sm">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button onClick={scrollNext} className="p-3 rounded-full border border-white/10 hover:border-[var(--accent-color)] text-white hover:text-[var(--accent-color)] transition-colors bg-white/5 backdrop-blur-sm">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Global Carousel */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="overflow-hidden"
                    ref={emblaRef}
                >
                    <div className="flex -ml-6">
                        {projectsData.map((project) => (
                            <motion.div variants={itemVariants} key={project.id} className="flex-[0_0_100%] sm:flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6 py-4">
                                <div className="h-full min-h-[340px] sm:min-h-[400px]">
                                    <ProjectCard project={project} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="flex md:hidden justify-center gap-4 mt-4">
                    <button onClick={scrollPrev} className="p-2 rounded-full border border-white/10 text-white bg-white/5">
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button onClick={scrollNext} className="p-2 rounded-full border border-white/10 text-white bg-white/5">
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
}
