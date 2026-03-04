import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Experiência", href: "#sobre" },
        { label: "Modelos de Negócio", href: "#modelos" },
        { label: "Equipe", href: "#equipe" },
        { label: "Equipamentos", href: "#features" },
        { label: "Benefícios", href: "#beneficios" },
        { label: "Contato", href: "#contato" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed z-50 transition-all duration-300 print:hidden left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-5xl rounded-full ${isScrolled
                ? "top-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/50 py-3 px-2 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
                : "top-6 bg-transparent py-4 px-2"
                }`}
        >
            <div className="mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Logo" className="h-8 md:h-10 object-contain mix-blend-lighten opacity-90" />
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors whitespace-nowrap"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/5511981817779"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-xs lg:text-sm bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(8,145,178,0.3)] ml-2 whitespace-nowrap"
                        >
                            Fale Conosco
                        </a>
                    </div>

                    {/* Menu Mobile - Hamburger */}
                    <button
                        className="md:hidden text-zinc-300 hover:text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Caixa de Menu Mobile Aberto */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-4 md:hidden bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-zinc-300 hover:text-cyan-400"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setMobileMenuOpen(false);
                                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/5511981817779"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 bg-cyan-600 text-center text-white font-medium rounded-2xl"
                            >
                                Iniciar Conversa
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
