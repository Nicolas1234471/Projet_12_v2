import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function CareerPath() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    return (
        <section id="careerpath" className="mt-20 pt-20">
            <div className="container max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl text-[#3f229c] font-bold mb-4 flex items-center gap-4">
                        Parcours
                    </h2>

                    <div className="h-px flex-1 ml-4" />

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4 text-slate-700">
                            <p className="leading-relaxed">
                                J'ai découvert le développement web via la
                                plateforme OpenClassrooms, je me suis renseigné
                                et j'ai tout de suite été intrigué, j'ai ainsi
                                décidé d'intégrer la formation Intégrateur Web.
                            </p>

                            <p className="leading-relaxed">
                                Être capable de penser aux besoins utilisateur
                                mais également avoir le souci du détail pour
                                toute la partie visuelle sont deux qualités qui
                                m'aident énormément dans ce domaine.
                            </p>

                            <p className="leading-relaxed">
                                J'ai appris à créer des interfaces web modernes,
                                performantes et accessibles, en utilisant des
                                technologies telles que HTML, CSS, JavaScript et
                                React.
                            </p>
                        </div>

                        <div className="self-center">
                            <div className="rounded-lg overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-6xl">🧭</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CareerPath;
