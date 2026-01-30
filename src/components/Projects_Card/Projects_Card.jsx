import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2), 0px 0px 30px rgba(0,0,0,0.1)"
          }}
          whileHoverTransition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-lg p-6 shadow-2xl shadow-xl/20"
        >
            <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-orange-300" />
                <div className="flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground"
                        aria-label="View GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors"
                        aria-label="View Live"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-center">
                {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed text-center">
                {project.description}
            </p>

            <div className="p-3 rounded-md bg-cyan-400/10 border border-cyan-400 mb-4">
                <p className="text-sm text-cyan-700 font-medium text-center">
                    💡 {project.learnings}
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground bg-muted bg-slate-300 px-2 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default ProjectCard;
