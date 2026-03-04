import { motion } from "motion/react";
import { CheckCircle2, Coins, Package, Gift, Shirt } from "lucide-react";

export default function Benefits() {
    return (
        <section className="py-24 px-6 bg-zinc-950 [break-inside:avoid] print:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Benefícios e Uniformes</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Benefícios */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 print:bg-zinc-800"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <CheckCircle2 className="text-cyan-500" />
                            Check-list de Benefícios
                        </h3>
                        <p className="text-zinc-400 mb-8 leading-relaxed print:text-zinc-300">
                            A fim de proporcionar excelência na prestação de serviços, os funcionários participam do plano de incentivo da PARK REAL e são avaliados diariamente através de Check-list.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 bg-zinc-950 p-4 rounded-xl border border-zinc-800 print:bg-zinc-900">
                                <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 shrink-0">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Bônus Mensal</h4>
                                    <p className="text-zinc-400 text-sm print:text-zinc-300">Bônus por desempenho de metas.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-zinc-950 p-4 rounded-xl border border-zinc-800 print:bg-zinc-900">
                                <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 shrink-0">
                                    <Package className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Cesta Básica</h4>
                                    <p className="text-zinc-400 text-sm print:text-zinc-300">Benefício de cesta básica mensal garantida.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-zinc-950 p-4 rounded-xl border border-zinc-800 print:bg-zinc-900">
                                <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 shrink-0">
                                    <Gift className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Sorteio de Prêmios</h4>
                                    <p className="text-zinc-400 text-sm print:text-zinc-300">Sorteios aos funcionários que se destacarem.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Uniformes */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 flex flex-col print:bg-zinc-800"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Shirt className="text-cyan-500" />
                            Uniformes Padronizados
                        </h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed print:text-zinc-300">
                            Entregues no momento de admissão e periodicamente substituídos para garantir a boa aparência da equipe.
                        </p>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-6 py-4 rounded-xl font-medium text-center mb-8">
                            3 peças por funcionário trocadas a cada 4 meses
                        </div>

                        <div className="mt-auto w-full flex items-center justify-center bg-zinc-950 p-6 rounded-2xl border border-zinc-800 print:bg-transparent print:border-none print:p-0">
                            <img
                                src="/uniforme.png"
                                alt="Uniforme Oficial Park Real"
                                className="w-full h-48 md:h-64 object-contain drop-shadow-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
