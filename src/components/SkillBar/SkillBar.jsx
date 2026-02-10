import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function SkillBar({ skill, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="font-mono">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden bg-slate-100">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: 'easeOut',
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                />
            </div>
        </div>
    );
}

export default SkillBar;
