import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';

const navLinks = [
    { href: '#about', label: 'À propos'},
    { href: '#projects', label: 'Projets'},
    { href: '#skills', label: 'Compétences'},
    { href: '#contact', label: 'Me contacter'},
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
                    isScrolled ? 'border-b shadow-lg bg-white/90 backdrop-blur-md' : 'bg-transparent'
                }`}
            >
                <nav className="flex items-center justify-between md:mx-auto pl-[50px] pr-[50px]">
                    <a
                        href="#"
                        className="text-2xl font-bold text-[#3f229c] hover:text-purple-800"
                    >
                        {'ND'}
                    </a>

                    {!isMobile && (
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={link.href}
                                    className="text-muted-foreground transition-colors font-medium text-[#3f229c] hover:text-purple-800"
                                >
                                    <span className="font-mono text-sm mr-1">
                                        {link.number}
                                    </span>
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a
                                href=""
                                className="px-4 py-2 border rounded hover:bg-slate-100 transition-colors font-mono text-sm"
                            >
                                CV
                            </a>
                        </motion.li>
                    </ul>
                    )}
                    {isMobile && (
                    <MobileMenu />
                    )}
                </nav>
            </motion.header>
        </div>
    );
}

export default Navbar;
