import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    return (
        <section id="contact" className="mt-40">
            <div className="container max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="text-[#3f229c] font-mono text-sm">
                        Quelle suite ?
                    </span>

                    <h2 className="text-4xl md:text-5xl text-[#3f229c] font-bold mt-4 mb-6">
                        Me contacter
                    </h2>

                    <p className="text-muted-foreground text-lg text-slate-700 max-w-xl mx-auto mb-12">
                        Je recherche actuellement une place en tant qu'intégrateur web/développeur front-end junior afin d'acquérir de l'expérience, avoir des points de vus extérieurs, et être dirigé sur la bonne voie afin de rendre des livrables de qualité et performants.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a
                            href="mailto:nicolas.dupouy17@orange.fr"
                            className="flex items-center gap-2 text-muted-foreground text-slate-700 hover:text-slate-400 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>nicolas.dupouy17@orange.fr</span>
                        </a>
                        <span className="hidden sm:block text-border">|</span>
                        <span className="flex items-center gap-2 text-muted-foreground text-slate-700">
                            <MapPin className="w-5 h-5" />
                            <span>La Rochelle, France</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
