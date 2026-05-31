/* React import removed - JSX runtime in use */
import { motion } from 'framer-motion';
// GlowCard removed — using plain containers for Skills layout
import { ScanLines } from './ui/ScanLines';

export function Skills() {
    return (
        <section id="skills" className="relative min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 overflow-hidden bg-[var(--bg-color)]">

            {/* Matrix Rain Background (Simplified with CSS) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-0 left-10 text-green-500 font-mono text-xs opacity-50 matrix-char" style={{ animationDuration: '3s' }}>01001000</div>
                <div className="absolute top-0 left-1/4 text-green-500 font-mono text-xs opacity-50 matrix-char" style={{ animationDuration: '5s', animationDelay: '1s' }}>01010100</div>
                <div className="absolute top-0 left-1/2 text-green-500 font-mono text-xs opacity-50 matrix-char" style={{ animationDuration: '4s', animationDelay: '2s' }}>01001101</div>
                <div className="absolute top-0 left-3/4 text-green-500 font-mono text-xs opacity-50 matrix-char" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>01001100</div>
                <div className="absolute top-0 right-10 text-green-500 font-mono text-xs opacity-50 matrix-char" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>00110011</div>
            </div>

            <ScanLines />

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-[var(--text-color)]">TECH STACK</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
                    {/* FRONTEND */}
                    <div className="flex flex-col bg-black/40 backdrop-blur-md border border-white h-full hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-200 p-5 sm:p-6 rounded-lg">
                        <div className="mb-5">
                            <h3 className="font-mono text-xl text-white uppercase text-center md:text-left">FRONTEND</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-[10px] sm:text-xs font-mono text-gray-300 text-center">HTML</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-[10px] sm:text-xs font-mono text-gray-300 text-center">CSS</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-[10px] sm:text-xs font-mono text-gray-300 text-center">JavaScript</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-[10px] font-mono text-gray-300 text-center leading-tight">Tailwind CSS</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React JS" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-[10px] sm:text-xs font-mono text-gray-300 text-center">React JS</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <svg viewBox="0 0 256 256" className="w-6 h-6 mb-2 text-white stroke-current transition-transform">
                                    <path fill="none" d="M0 0h256v256H0z" />
                                    <path
                                        fill="none"
                                        strokeWidth="25"
                                        strokeLinecap="round"
                                        d="M208 128l-80 80M192 40L40 192"
                                    />
                                </svg>
                                <span className="text-xs font-mono text-gray-300 text-center">shadcn/ui</span>
                            </div>
                        </div>
                    </div>

                    {/* BACKEND */}
                    <div className="flex flex-col bg-black/40 backdrop-blur-md border border-white h-full hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-200 p-5 sm:p-6 rounded-lg">
                        <div className="mb-5">
                            <h3 className="font-mono text-xl text-white uppercase text-center md:text-left">BACKEND</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Node.js</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express.js" className="w-6 h-6 mb-2 object-contain invert transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Express.js</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">MySQL</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Supabase</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://avatars.githubusercontent.com/u/49538330?s=200&v=4" alt="Clerk" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Clerk</span>
                            </div>
                        </div>
                    </div>

                    {/* LANGUAGES */}
                    <div className="flex flex-col bg-black/40 backdrop-blur-md border border-white h-full hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-200 p-5 sm:p-6 rounded-lg">
                        <div className="mb-5">
                            <h3 className="font-mono text-xl text-white uppercase text-center md:text-left">LANGUAGES</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Python</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Java</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">SQL</span>
                            </div>
                        </div>
                    </div>

                    {/* TOOLS */}
                    <div className="flex flex-col bg-black/40 backdrop-blur-md border border-white h-full hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-200 p-5 sm:p-6 rounded-lg">
                        <div className="mb-5">
                            <h3 className="font-mono text-xl text-white uppercase text-center md:text-left">TOOLS</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Git</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 mb-2 object-contain invert transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">GitHub</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt="Vercel" className="w-6 h-6 mb-2 object-contain invert transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Vercel</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Figma</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">Canva</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" alt="IntelliJ IDEA" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-[10px] font-mono text-gray-300 text-center leading-tight">IntelliJ IDEA</span>
                            </div>
                            <div className="skill-card p-3 h-20 flex flex-col items-center justify-center rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="w-6 h-6 mb-2 object-contain transition-transform" />
                                <span className="text-xs font-mono text-gray-300 text-center">VS Code</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
