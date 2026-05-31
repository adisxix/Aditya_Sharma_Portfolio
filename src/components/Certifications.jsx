import { motion } from 'framer-motion';
import { BadgeCheck, Trophy, Star, Award, ArrowUpRight } from 'lucide-react';

const certs = [
  { title: "React JS", issuer: "OneRoadmap", date: "2026", link: "https://drive.google.com/file/d/1yE7wkp32zUarekquEegaxMe8ufEm7lMG/view?usp=sharing" },
  { title: "JavaScript", issuer: "OneRoadmap", date: "2026", link: "https://drive.google.com/file/d/1u7Ni2BYlc7COG9SzJedQk4FFV5jiZF-Z/view?usp=sharing" },
  { title: "CSS", issuer: "OneRoadmap", date: "2026", link: "https://drive.google.com/file/d/1Xmk-o6DVV8q0BwIPoMVoip3JQCPp8Lth/view?usp=sharing" },
  { title: "Git & GitHub", issuer: "Le Wagon", date: "2025", link: "https://drive.google.com/file/d/1N21gKEmedgzDL__Gt_oFFClfvr3gBt64/view?usp=sharing" },
];

const achievements = [
  { title: "Solved 50+ Problems on GeeksforGeeks", desc: "Holding 56th Postion from my college" },
  { title: "Member of Coding Buddies Society", desc: "Taught basic web development to community members" },
  { title: "Participated in Gen AI Buildathon", desc: "Held By NXT Wave & Open AI" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 overflow-hidden bg-[var(--bg-color)]">

      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-[var(--text-color)] uppercase">
            MILESTONES
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Certifications */}
          <div className="flex flex-col bg-black/40 backdrop-blur-md border border-white rounded-xl h-full p-6 sm:p-8 transition-colors duration-500">
            <h3 className="font-mono text-xl sm:text-2xl text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
              <Award className="w-6 h-6 text-[var(--accent-color)]" />
              CERTIFICATIONS
            </h3>
            <div className="flex flex-col gap-6">
              {certs.map((cert, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 group">
                  <div className="mt-1 p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-[var(--accent-color)]/50 group-hover:bg-[var(--accent-color)]/10 transition-colors">
                    <BadgeCheck className="w-5 h-5 text-gray-400 group-hover:text-[var(--accent-color)] transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base sm:text-lg group-hover:text-[var(--accent-color)] transition-colors">{cert.title}</h4>
                    <div className="font-mono text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                      {cert.issuer} <span className="mx-2 text-gray-600">|</span> {cert.date} <span className="mx-2 text-gray-600">|</span> <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-color)] hover:text-white hover:underline transition-colors inline-flex items-center gap-0.5 align-baseline">View<ArrowUpRight className="w-3.5 h-3.5" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="flex flex-col bg-black/40 backdrop-blur-md border border-white rounded-xl h-full p-6 sm:p-8 transition-colors duration-500">
            <h3 className="font-mono text-xl sm:text-2xl text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
              <Trophy className="w-6 h-6 text-[var(--accent-color)]" />
              ACHIEVEMENTS
            </h3>
            <div className="flex flex-col gap-6">
              {achievements.map((ach, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 group">
                  <div className="mt-1 p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-[var(--accent-color)]/50 group-hover:bg-[var(--accent-color)]/10 transition-colors">
                    <Star className="w-5 h-5 text-gray-400 group-hover:text-[var(--accent-color)] transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base sm:text-lg group-hover:text-[var(--accent-color)] transition-colors">{ach.title}</h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
