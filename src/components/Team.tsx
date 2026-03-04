import { motion } from "motion/react";

export default function Team() {
    return (
        <>
            {/* Equipe Profissional */}
            <section className="py-24 px-6 bg-zinc-950 [break-inside:avoid] print:py-16">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Equipe Profissional</h2>
                        <p className="text-zinc-400 text-lg print:text-zinc-300">Estrutura hierárquica focada em excelência</p>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        {[
                            { title: "Diretoria Operacional", desc: "Gestão estratégica", width: "w-full max-w-md", color: "bg-cyan-900/40 border-cyan-500/30 print:bg-cyan-900 print:border-cyan-700" },
                            { title: "Supervisor e Fiscal de Pátio", desc: "Fiscalização e controle", width: "w-full max-w-lg", color: "bg-cyan-800/30 border-cyan-500/20 print:bg-cyan-800 print:border-cyan-700" },
                            { title: "Encarregado", desc: "Qualidade de serviços", width: "w-full max-w-2xl", color: "bg-cyan-900/20 border-cyan-500/10 print:bg-cyan-900 print:border-cyan-800" },
                            { title: "Manobristas e Operadores de Caixa", desc: "Atendimento ao cliente", width: "w-full max-w-4xl", color: "bg-zinc-900 border-zinc-800 print:bg-zinc-800" },
                        ].map((level, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`${level.width} ${level.color} border p-6 rounded-2xl text-center backdrop-blur-sm print:backdrop-blur-none`}
                            >
                                <h4 className="text-xl font-bold text-white mb-1">{level.title}</h4>
                                <p className="text-cyan-300/80 text-sm uppercase tracking-widest print:text-cyan-200">{level.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mão de Obra Qualificada */}
            <section className="py-24 px-6 bg-zinc-900 [break-inside:avoid] print:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Mão de Obra Qualificada</h2>
                        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 print:bg-zinc-800">
                            <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
                            <h3 className="text-2xl font-bold text-white mb-4">Recrutamento Rigoroso</h3>
                            <ul className="space-y-3 text-zinc-400 print:text-zinc-200">
                                <li>• Aprovação em testes teóricos, práticos e psicotécnicos.</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 print:bg-zinc-800">
                            <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
                            <h3 className="text-2xl font-bold text-white mb-4">Treinamento Especializado</h3>
                            <ul className="space-y-3 text-zinc-400 print:text-zinc-200">
                                <li>• "Curso de atendimento profissional" ministrado por empresa.</li>
                                <li>• Treinamentos complementares no posto de trabalho.</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 print:bg-zinc-800">
                            <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
                            <h3 className="text-2xl font-bold text-white mb-4">Supervisão Constante</h3>
                            <ul className="space-y-3 text-zinc-400 print:text-zinc-200">
                                <li>• Funcionários uniformizados e identificados.</li>
                                <li>• Acompanhamento diário por supervisores e gerentes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
