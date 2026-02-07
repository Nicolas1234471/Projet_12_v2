import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
    return (
        <footer className="py-12 border-t">
            <div className="container max-w-full text-center">
                <div className="flex items-center justify-center gap-6 mb-6">
                    <a
                        href="https://github.com/Nicolas1234471"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-[#3f229c] hover:text-purple-800 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-[#3f229c] hover:text-purple-800 transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:nicolas.dupouy17@orange.fr"
                        className="text-muted-foreground text-[#3f229c] hover:text-purple-800 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-muted-foreground text-sm font-mono"></p>

                <p className="text-muted-foreground/50 text-xs text-slate-700 font-mono mt-2">
                    © {new Date().getFullYear()} Nicolas Dupouy.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
