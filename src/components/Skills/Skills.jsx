import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SkillBar from '../SkillBar/SkillBar.jsx';

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3 / Tailwind", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Git & GitHub", level: 75 },
  { name: "Responsive Design", level: 85 },
  { name: "UI/UX Basics", level: 65 },
];

const tools = [
    'VS Code',
    'Figma',
    'Chrome DevTools',
    'npm / yarn',
    'Vercel',
    'GitHub',
];

function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    return (
        <section id="skills" className="mt-40 bg-muted/30">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
                        <span className="font-mono text-xl">
                            03.
                        </span>
                        Compétences et outils
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mb-12">
                        Technologies and tools I've learned and worked with
                        during my development journey.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold mb-6 text-center">
                                Compétences techniques
                            </h3>
                            {skills.map((skill, index) => (
                                <SkillBar
                                    key={skill.name}
                                    skill={skill}
                                    index={index}
                                />
                            ))}
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-center">
                                Outils et Plateformes
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {tools.map((tool, index) => (
                                    <motion.div
                                        key={tool}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, scale: 1 }
                                                : {}
                                        }
                                        transition={{
                                            delay: 0.3 + index * 0.05,
                                        }}
                                        className="glass-card p-4 rounded-lg text-center shadow-2xl shadow-xl/20"
                                    >
                                        <span className="font-mono text-sm">
                                            {tool}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 rounded-lg">
                                <h4 className="font-semibold mb-3 text-center">
                                    En train d'apprendre
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Tailwind', 'Framer motion'].map(
                                        (item) => (
                                            <span
                                                key={item}
                                                className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-full border border-cyan-400"
                                            >
                                                {item}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
