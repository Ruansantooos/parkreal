import { motion } from "motion/react";
import { Users, FileText, CheckCircle2 } from "lucide-react";

export default function BusinessModels() {
    return (
        <section className="py-24 px-6 bg-zinc-900 [break-inside:avoid] print:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Modelos de Negócio</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800 relative overflow-hidden group print:bg-zinc-800"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors print:hidden"></div>
                        <Users className="w-12 h-12 text-cyan-500 mb-6" />
                        <h3 className="text-3xl font-bold text-white mb-6">Parceria</h3>
                        <ul className="space-y-4">
                            {[
                                "Implantação e administração com repasse a partir de percentual do faturamento bruto arrecadado.",
                                "Controle rigoroso através de equipamentos e terminais com sistema integrado.",
                                "Garante maior rentabilidade e controle ao proprietário do imóvel ou condomínio."
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                                    <span className="text-zinc-300 print:text-zinc-200">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800 relative overflow-hidden group print:bg-zinc-800"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors print:hidden"></div>
                        <FileText className="w-12 h-12 text-cyan-500 mb-6" />
                        <h3 className="text-3xl font-bold text-white mb-6">Aluguel Fixo</h3>
                        <ul className="space-y-4">
                            {[
                                "Através de projeto a partir do estudo de demanda da região.",
                                "Determinação do valor mensal do aluguel a ser repassado para o proprietário.",
                                "Contratos elaborados pelo departamento jurídico conforme exigências do contratante."
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                                    <span className="text-zinc-300 print:text-zinc-200">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
