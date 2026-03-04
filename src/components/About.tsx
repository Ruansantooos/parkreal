import { motion } from "motion/react";
import { ShieldCheck, Award, Eye, TrendingUp } from "lucide-react";

export default function About() {
    return (
        <>
            {/* Sobre Nós */}
            <section id="sobre" className="py-24 px-6 relative z-10 bg-zinc-900 border-t border-zinc-800 [break-inside:avoid] print:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full print:hidden"></div>
                            <img
                                src="/garagemMaket.png"
                                alt="Garagem Maket Park Real"
                                className="relative z-10 rounded-2xl border border-zinc-800 shadow-2xl print:shadow-none w-full h-[400px] object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                A Melhor <span className="text-cyan-500">Experiência</span>
                            </h2>

                            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed print:text-zinc-200">
                                <p>
                                    A nossa rede de estacionamentos preza pelo <strong className="text-white">atendimento, conforto e segurança</strong> para proporcionar a melhor experiência possível para os nossos clientes.
                                </p>
                                <p>
                                    Temos a <strong className="text-white">inovação no nosso DNA</strong> e nos empenhamos para transformar uma breve parada ou uma permanência de longa duração em um serviço cortês, assistencial, eficiente e seguro.
                                </p>
                            </div>

                            <div className="mt-10 inline-flex items-center gap-4 bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl print:bg-zinc-800">
                                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-cyan-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-400 print:text-zinc-300">Nosso comprometimento é</p>
                                    <p className="text-xl font-bold text-white tracking-wide">REAL!</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Nossa Empresa */}
            <section className="py-24 px-6 relative z-10 bg-zinc-950 [break-inside:avoid] print:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nossa Empresa</h2>
                        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Experiência",
                                desc: "Contamos com profissionais altamente qualificados nos diversos setores e segmentos que atendemos."
                            },
                            {
                                icon: Eye,
                                title: "Transparência",
                                desc: "Desenvolvemos atividades em constante busca de diferenciais para oferecer maior tecnologia e comodidade."
                            },
                            {
                                icon: TrendingUp,
                                title: "Satisfação",
                                desc: "O crescimento e prestígio alcançados são resultantes do esforço coletivo de nossa equipe."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, borderColor: '#06b6d4', boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl cursor-pointer print:bg-zinc-900 print:border-zinc-700"
                            >
                                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed print:text-zinc-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
