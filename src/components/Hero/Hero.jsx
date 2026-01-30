import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Github } from 'lucide-react';
import { SiGithub, SiMinutemailer } from '@icons-pack/react-simple-icons';

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className=""
                    ></motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                    >
                        <span
                            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
                        >
                            Nicolas Dupouy
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-8"
                    >
                        Développeur Front-End
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
                    >
                        Placeholder text
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center gap-2"
                    >
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full text-muted-foreground transition-colors"
                        >
                            <SiGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full text-muted-foreground transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:nicolas.dupouy17@orange.fr"
                            className="p-3 rounded-full text-muted-foreground transition-colors"
                        >
                            <SiMinutemailer className="w-6 h-6" />
                        </a>
                    </motion.div>

                    <motion.a
                        href="#about"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="inline-flex items-center gap-2"
                    >
                        <span className="font-mono text-sm">
                            Scrollez pour en savoir plus
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowDown className="w-4 h-4" />
                        </motion.div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
