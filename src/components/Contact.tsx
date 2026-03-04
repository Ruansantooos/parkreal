import { motion } from "motion/react";
import { Mail, Phone, User, Building2, Hotel, HeartPulse, ShoppingCart, GraduationCap, Calendar } from "lucide-react";

export default function Contact() {
    return (
        <>
            {/* Áreas de Atuação & Footer */}
            <section id="contato" className="py-24 px-6 bg-zinc-900 relative overflow-hidden [break-inside:avoid] print:py-16">
                <div className="absolute inset-0 z-0 opacity-10 print:hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Áreas de Atuação</h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        {[
                            { icon: Building2, label: "Flats" },
                            { icon: Hotel, label: "Hotéis" },
                            { icon: HeartPulse, label: "Hospitais" },
                            { icon: ShoppingCart, label: "Shopping Centers" },
                            { icon: Building2, label: "Condomínios" },
                            { icon: GraduationCap, label: "Faculdades" },
                            { icon: Calendar, label: "Eventos" }
                        ].map((area, i) => (
                            <div key={i} className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-full text-zinc-300 print:bg-zinc-800 print:border-zinc-700">
                                <area.icon className="w-5 h-5 text-cyan-500" />
                                <span className="font-medium">{area.label}</span>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 tracking-tight print:text-cyan-500">
                            Nosso comprometimento é REAL!
                        </h3>
                    </motion.div>
                </div>
            </section>

            {/* Contato */}
            <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900 relative [break-inside:avoid] print:py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Fale Conosco</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-12"></div>

                    <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto print:text-zinc-300">
                        Estamos prontos para entender as necessidades do seu negócio e oferecer a melhor solução em gestão de estacionamentos.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.a
                            href="mailto:contato@parkreal.com"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group flex flex-col items-center print:bg-zinc-800"
                        >
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6 text-cyan-500" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">E-mail</h3>
                            <p className="text-zinc-400 text-sm print:text-zinc-300">contato@parkreal.com</p>
                        </motion.a>

                        <motion.a
                            href="https://wa.me/5511981817779"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group flex flex-col items-center print:bg-zinc-800"
                        >
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Phone className="w-6 h-6 text-cyan-500" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Telefone / WhatsApp</h3>
                            <p className="text-zinc-400 text-sm print:text-zinc-300">(11) 98181-7779</p>
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center print:bg-zinc-800"
                        >
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4">
                                <User className="w-6 h-6 text-cyan-500" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Atendimento</h3>
                            <p className="text-zinc-400 text-sm print:text-zinc-300">Anderson Santos</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <footer className="py-8 text-center border-t border-zinc-900 bg-zinc-950 text-zinc-500 text-sm print:py-4">
                <p>&copy; {new Date().getFullYear()} Park Real Estacionamentos. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}
