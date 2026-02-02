import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectsCard from '../Projects_Card/Projects_Card.jsx';

const projects = [
  {
    title: "Ohmyfood",
    description: "Site vitrine de restaurants gastronomiques.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    learnings: "Acquis les bases du développement web et de la création de sites responsives.",
    github: "https://github.com/Nicolas1234471/OCProjet4",
    live: "https://nicolas1234471.github.io/OCProjet4/",
  },
  {
    title: "Kasa",
    description: "Refonte complète d'un site legacy vers une application front-end moderne pour une société de location d'appartements entre particuliers.",
    tech: ["React", "React-Router", "Vite", "JavaScript", "Git"],
    learnings: "Maîtrise de React et des concepts SPA, gestion des routes ainsi qu'utilisation de données stockées en JSON.",
    github: "https://github.com/Nicolas1234471/Projet_7",
    live: "#",
  },
  {
    title: "Argent Bank",
    description: "Dans le cadre d’une mission front-end pour Argent Bank, une banque en ligne en pleine croissance, j’ai participé au développement du tableau de bord utilisateur et à la réflexion sur l’architecture des futures fonctionnalités.",
    tech: ["React","Redux","JavaScript","Sass","Git"],
    learnings: "Approfondissement des compétences en React et introduction à Redux pour la gestion d'état globale.",
    github: "https://github.com/Nicolas1234471/Projet_10",
    live: "#",
  },
  {
    title: "Site Portfolio",
    description: "Portofolio personnel pour présenter mes projets et compétences.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    learnings: "Création d'un site portfolio personnel pour présenter mes projets et compétences, avec des animations fluides et un design moderne.",
    github: "https://github.com/Nicolas1234471/Projet_12_v2",
    live: "https://nicolas1234471.github.io/Projet_12_v2/",
  },
];

function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    return (
        <section id="projects" className="mt-40">
            <div className="container max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl text-[#3f229c] font-bold mb-4 flex items-center gap-4">
                        Projets et Apprentissage
                    </h2>

                    <p className="text-muted-foreground text-slate-700 max-w-2xl mb-12">
                        Voici quelques projets réalisés au cours de ma formation. Chacun d'entre eux m'a appris une ou plusieurs compétences clé concernant le développement Front-End.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <ProjectsCard
                                key={project.title}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;