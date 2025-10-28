import { Code2, Database, Globe, Smartphone, Server, GitBranch, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

/**
 * Skills-as-cards (uniform size) with animated progress
 * - All individual skills are presented as cards (no categories)
 * - Consistent sizing via fixed height
 * - Staggered animations + hover lift
 * - Optional category filters (pills at the top)
 * - Reduced-motion safe
 */

interface SkillItem {
  name: string;
  level: number; // 0-100
  category: "Frontend" | "Backend" | "Database" | "Deployment" | "AI / Integration" | "Tools & Platforms";
  icon: JSX.Element;
}

const ALL_SKILLS: SkillItem[] = [
  // Frontend
  { name: "React.js", level: 90, category: "Frontend", icon: <Code2 className="w-5 h-5" /> },
  { name: "JavaScript", level: 88, category: "Frontend", icon: <Code2 className="w-5 h-5" /> },
  { name: "TypeScript", level: 82, category: "Frontend", icon: <Code2 className="w-5 h-5" /> },
  { name: "HTML5", level: 95, category: "Frontend", icon: <Code2 className="w-5 h-5" /> },
  { name: "CSS3", level: 90, category: "Frontend", icon: <Code2 className="w-5 h-5" /> },
  { name: "Tailwind CSS", level: 92, category: "Frontend", icon: <Code2 className="w-5 h-5" /> },

  // Backend
  { name: "Node.js", level: 80, category: "Backend", icon: <Server className="w-5 h-5" /> },
  { name: "Express.js", level: 76, category: "Backend", icon: <Server className="w-5 h-5" /> },

  // Database
  { name: "MongoDB", level: 78, category: "Database", icon: <Database className="w-5 h-5" /> },
  { name: "SQL", level: 70, category: "Database", icon: <Database className="w-5 h-5" /> },

  // Deployment
  { name: "Netlify", level: 78, category: "Deployment", icon: <Globe className="w-5 h-5" /> },
  { name: "Render", level: 65, category: "Deployment", icon: <Globe className="w-5 h-5" /> },

  // AI / Integration
  { name: "Gemini API", level: 72, category: "AI / Integration", icon: <Smartphone className="w-5 h-5" /> },
  { name: "REST APIs", level: 74, category: "AI / Integration", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Axios", level: 70, category: "AI / Integration", icon: <Smartphone className="w-5 h-5" /> },

  // Tools
  { name: "Git", level: 88, category: "Tools & Platforms", icon: <GitBranch className="w-5 h-5" /> },
  { name: "GitHub", level: 86, category: "Tools & Platforms", icon: <GitBranch className="w-5 h-5" /> },
  { name: "VS Code", level: 90, category: "Tools & Platforms", icon: <GitBranch className="w-5 h-5" /> },
  { name: "Figma", level: 72, category: "Tools & Platforms", icon: <GitBranch className="w-5 h-5" /> },
  { name: "Postman", level: 84, category: "Tools & Platforms", icon: <GitBranch className="w-5 h-5" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 16 } },
};

function useParticles(count = 14) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 2,
        duration: Math.random() * 8 + 7,
      })),
    [count]
  );
}

export default function SkillsCards() {
  const particles = useParticles();
  const [filter, setFilter] = useState<SkillItem["category"] | "All">("All");

  const categories = ["All", ...Array.from(new Set(ALL_SKILLS.map((s) => s.category)))] as const;
  const skills = filter === "All" ? ALL_SKILLS : ALL_SKILLS.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            aria-hidden
            className="absolute rounded-full bg-white/10 shadow"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, -14, 0], opacity: [0, 1, 0.6, 1] }}
            transition={{ repeat: Infinity, delay: p.delay, duration: p.duration, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs text-gray-300 tracking-wide">Focused, consistent progress</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ring-1 ring-white/10 ${
                filter === c ? "bg-white/20 text-white" : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {skills.map((s, idx) => (
            <motion.div key={s.name + idx} variants={item}>
              <SkillCard skill={s} index={idx} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative h-36 rounded-2xl p-5 bg-white/5 backdrop-blur-sm ring-1 ring-white/10 overflow-hidden group"
    >
      {/* glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,.08), transparent 40%)" }}
      />

      {/* top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-purple-400">{skill.icon}<span className="text-white font-semibold">{skill.name}</span></div>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300 ring-1 ring-white/10">
          {skill.category}
        </span>
      </div>

      {/* progress */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-300">Proficiency</span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * index }}
            className="text-xs text-gray-400"
          >
            {skill.level}%
          </motion.span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.06 * index }}
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </div>

      {/* subtle bottom badges */}
      <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-[11px] text-gray-400">
        <span>Growing</span>
        <span>Last updated · now</span>
      </div>

      {/* border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-white/20" />
    </motion.div>
  );
}
