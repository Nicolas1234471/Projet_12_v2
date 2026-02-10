import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { motion } from 'framer-motion';
import './MobileMenu.css';

const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#careerpath', label: 'Parcours' },
    { href: '#projects', label: 'Projets' },
    { href: '#skills', label: 'Compétences' },
    { href: '#contact', label: 'Me contacter' },
];

function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <Menu right isOpen={menuOpen} onStateChange={handleStateChange}>
            <ul className="gap-6 flex flex-col">
                {navLinks.map((link, index) => (
                    <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <a
                            onClick={closeMenu}
                            href={link.href}
                            className="bm-item text-[#3f229c] hover:text-purple-800"
                        >
                            <span className="">{link.number}</span>
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
                        className="bm-item px-4 py-2 border rounded text-[#3f229c] hover:text-purple-800 hover:bg-slate-100 transition-colors font-mono text-sm text-center"
                    >
                        CV
                    </a>
                </motion.li>
            </ul>
        </Menu>
    );
}

export default MobileMenu;
