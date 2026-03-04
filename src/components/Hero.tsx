import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-[max(100vh,800px)] flex flex-col items-center justify-center overflow-hidden [break-after:page] print:min-h-screen print:h-screen">
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <img
          src="https://picsum.photos/seed/parking-garage/1920/1080?blur=2"
          className="w-full h-full object-cover opacity-20 print:opacity-30"
          alt="Estacionamento"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950 print:from-zinc-900/60 print:to-zinc-950"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Logo Nova Image */}
          <div className="mb-12 flex flex-col items-center justify-center print:bg-transparent print:border-none print:shadow-none">
            <img
              src="/logo.png"
              alt="Logo Park Real"
              className="h-40 md:h-56 object-contain mix-blend-lighten opacity-90 drop-shadow-2xl"
            />
          </div>

          <p className="text-xl md:text-3xl font-medium text-zinc-200 mb-8 max-w-4xl mx-auto leading-relaxed print:text-zinc-100">
            Especialistas em administração, locação e terceirização de estacionamentos e Valet Service.
          </p>
          <p className="text-lg md:text-xl text-cyan-400 max-w-2xl mx-auto italic font-light">
            "Nossa filosofia de trabalho gira em torno da transparência e atenção humana."
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 z-10 text-zinc-500 print:hidden"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 opacity-50" />
      </motion.div>
    </header>
  );
}
