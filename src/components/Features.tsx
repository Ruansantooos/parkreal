import { motion } from "motion/react";
import { Monitor, ArrowRightLeft, Video, Hash, Eye, Lock, ShieldCheck } from "lucide-react";

export default function Features() {
    return (
        <>
            {/* Tecnologia e Equipamentos */}
            <section className="py-24 px-6 bg-zinc-950 [break-inside:avoid] print:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tecnologia e Equipamentos</h2>
                        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Monitor, title: "Software de Gerenciamento", desc: "Controle informatizado de toda movimentação de arrecadação dos estacionamentos." },
                            { icon: ArrowRightLeft, title: "Cancelas Automáticas", desc: "Leitura magnética, código de barras e proximidade para controle de acesso." },
                            { icon: Video, title: "Circuito Fechado de TV", desc: "Monitoramento completo do local para segurança e controle." },
                            { icon: Hash, title: "Contadores de Veículos", desc: "Controle preciso do fluxo de entrada e saída de veículos." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center hover:border-cyan-500/50 transition-colors print:bg-zinc-800"
                            >
                                <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-800 print:bg-zinc-900">
                                    <item.icon className="w-8 h-8 text-cyan-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-zinc-400 print:text-zinc-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Segurança e Proteção */}
            <section className="py-24 px-6 bg-zinc-900 [break-inside:avoid] print:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Segurança e Proteção</h2>
                        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-cyan-950/30 border border-cyan-900/50 p-8 rounded-2xl print:bg-cyan-900/10">
                            <Eye className="w-10 h-10 text-cyan-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Vigilância 24 Horas</h3>
                            <p className="text-zinc-300 mb-2">Sistema de circuito fechado de TV para monitoramento constante.</p>
                            <p className="text-zinc-300">Iluminação adequada e sinalizações para garantir a segurança.</p>
                        </div>

                        <div className="bg-cyan-950/30 border border-cyan-900/50 p-8 rounded-2xl print:bg-cyan-900/10">
                            <Lock className="w-10 h-10 text-cyan-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Controle de Acesso</h3>
                            <p className="text-zinc-300 mb-2">Sistema seletivo para entrada e saída de veículos.</p>
                            <p className="text-zinc-300">Equipe de segurança treinada para situações diversas.</p>
                        </div>

                        <div className="bg-cyan-950/30 border border-cyan-900/50 p-8 rounded-2xl print:bg-cyan-900/10">
                            <ShieldCheck className="w-10 h-10 text-cyan-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Seguro Completo</h3>
                            <p className="text-zinc-300 mb-2">Parceria com a Liberty Seguros para cobertura total.</p>
                            <p className="text-zinc-300">Garantias contra roubo, sinistro e incêndio para veículos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
