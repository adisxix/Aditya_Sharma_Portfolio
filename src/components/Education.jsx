import React from 'react';
import { motion } from 'framer-motion';

const entries = [
{
title: "Bachelor of Technology",
inst: "Dr. APJ Abdul Kalam Technical University",
location: "Greater Noida, Uttar Pradesh",
years: "2022 — 2026",
score: "CGPA: 7.0/10",
subjects: ["Software Engineering","DSA","Databases", "Operating Systems","OOPS", ],
desc: "B.Tech in Computer Science and Engineering (CSE)",
},
{
title: "High School (12th)",
inst: "American Montessori Public School",
location: "Gurugram, Haryana",
years: "2018 — 2020",
score: "Percentage: 70%",
subjects: ["Physics", "Chemistry", "Mathematics"],
desc: "Class XII — Science (Non-Medical)",
},
{
title: "Secondary (10th)",
inst: "American Montessori Public School",
location: "Gurugram, Haryana",
years: "2016 — 2018",
score: "Percentage: 70%",
subjects: ["Mathematics", "Science", "Social Studies","English","Hindi"],
desc: "Class X - Secondary Education",
},
];

export default function Education() {
const items = [...entries, ...entries]; // duplicate for seamless loop

return (
<motion.section
id="education"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="mt-12 relative pb-20"
>
<div className="container mx-auto px-6 max-w-6xl">
<motion.div
initial={{ opacity: 0, y: 8 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="mb-10 text-center"
>
<h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--text-color)] mb-3">EDUCATION</h2>
</motion.div>

<div className="flex flex-col gap-6 max-w-4xl mx-auto">
{entries.map((e) => (
<div key={e.title} className="p-6 bg-black border border-white rounded-xl transition-all ho group">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
<div>
<h4 className="font-semibold text-[var(--text-color)] text-lg">{e.title}</h4>
<div className="font-medium text-[var(--accent-color)]">{e.inst}</div>
<div className="text-sm text-[var(--text-muted)]">{e.location}</div>
</div>
<div className="text-sm text-white">{e.years}</div>
</div>
<div className="mt-3 text-sm text-[var(--text-muted)]">{e.desc}</div>

<div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="text-sm">
<span className="font-mono text-[var(--accent-color)] mr-2">Score:</span>
<span className="text-[var(--text-color)]">{e.score}</span>
</div>
<div className="text-sm">
<span className="font-mono text-[var(--accent-color)] mr-2">Key Subjects:</span>
<span className="text-[var(--text-muted)]">{e.subjects.join(', ')}</span>
</div>
</div>
</div>
))}
</div>
</div>
</motion.section>
);
}
