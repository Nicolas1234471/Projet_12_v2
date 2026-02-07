import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    return (
        <section id="about" className="bg-muted/30">
            <div className="container max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl text-[#3f229c] font-bold mb-4 flex items-center gap-4">
                        About Me
                    </h2>

                    <div className="h-px bg-border flex-1 ml-4" />

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4 text-slate-700">
                            <p className="text-muted-foreground leading-relaxed">
                                Bonjour, je suis Nicolas Dupouy, développeur
                                Front-End/Intégrateur web ayant un grand intérêt
                                pour l'accessibilité de le design system. Je
                                prends plaisir à rendre au client le meilleur
                                rendu visuel possible ainsi qu'une interface
                                utilisateur la plus plaisante autant
                                visuellement que d'un point de vue pratique.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                J'ai découvert le développement web via une
                                formation OpenClassrooms, je me suis renseigné
                                et j'ai tout de suite été intrigué, penser aux
                                besoins utilisateur mais également avoir le
                                souci du détail pour toute la partie visuelle
                                sont deux qualités qui m'aident énormément dans
                                ce domaine.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                Mon objectif en tant que junior est d'intégrer
                                une équipe afin d'acquérir de l'expérience,
                                avoir d'autres points de vus que le mien sur mon
                                travail, et me diriger sur la bonne voie afin de
                                livrer des produits de qualité et performants.
                                Lorsqu'un projet me plaît, je sais me montrer
                                très investi et motivé.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="aspect-square rounded-lg overflow-hidden glass-card">
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-6xl">💻</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-lg" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
