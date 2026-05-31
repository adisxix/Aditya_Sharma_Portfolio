import { motion } from 'framer-motion';

function NumberTicker({ value, label }) {
// A simplified ticker (could use Framer Motion for actual counting animation)
return (
<div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[var(--accent-color)] transition-colors group">
<span className="text-4xl font-mono font-bold text-[var(--accent-color)] group-hover:scale-110 transition-transform">{value}</span>
<span className="text-sm text-[var(--text-muted)] mt-2 font-mono uppercase tracking-wider">{label}</span>
</div>
);
}

export function About() {
return (
<section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
<div className="container mx-auto px-4 sm:px-6 max-w-6xl z-10 flex flex-col items-center gap-10 lg:gap-12">

<motion.div
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="w-full text-center"
>
<div className="font-mono text-[var(--accent-color)] text-3xl md:text-5xl font-bold tracking-tighter uppercase">
ABOUT ME
</div>
</motion.div>

<div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

{/* LEFT: Avatar Placeholder */}
<motion.div 
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="w-full lg:w-1/3 flex justify-center"
>
<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-[2rem] border border-white/80 bg-white/5 p-3 shadow-[0_0_35px_rgba(255,255,255,0.25)]">
<div className="absolute inset-0 rounded-[2rem] bg-white/10 blur-2xl opacity-40" />
<div className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-black">
<img
	src="/pic.png"
	alt="Aditya"
	className="relative z-10 block w-full h-auto object-contain"
/>
</div>
</div>
</motion.div>

{/* RIGHT: Content */}
<motion.div 
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="w-full lg:w-2/3 flex flex-col gap-5 sm:gap-6"
>
<p className="text-base sm:text-lg md:text-xl text-[var(--text-color)] leading-relaxed font-sans text-justify">
Hey, I'm <span className="name-glow text-[var(--accent-color)] font-bold">Aditya</span> a full stack developer who genuinely enjoys building things people actually use. I care about the details why a button feels right, why a flow makes sense, why the backend holds up under pressure. That intersection of design thinking and engineering logic is where I live.

Right now I'm going deeper into full-stack development, exploring how AI can be woven into real products not as a gimmick, but as genuine utility. My vision is simple build software that's fast, thoughtful, and actually solves something. I'm actively interested in scalable web systems, product thinking, and the kind of work where good engineering and good design are the same thing.
</p>


					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
						<NumberTicker value="15+" label="Projects Shipped" />
						<NumberTicker value="10+" label="Technologies" />
						<NumberTicker value="2026" label="Graduation" />
					</div>

					{/* Education moved to its own section (App.jsx) */}
</motion.div>
</div>

</div>

</section>
);
}
