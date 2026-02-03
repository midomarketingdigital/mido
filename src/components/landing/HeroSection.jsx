import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-600/40 rounded-full blur-3xl" />
        
        {/* Decorative honeycomb pattern */}
        <svg className="absolute left-0 top-1/4 w-64 h-64 text-white/10" viewBox="0 0 100 100">
          <pattern id="honeycomb" width="20" height="17.32" patternUnits="userSpaceOnUse">
            <path d="M10 0 L20 5.77 L20 17.32 L10 23.09 L0 17.32 L0 5.77 Z" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#honeycomb)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            MIDO
          </h1>
          <p className="text-white/80 text-sm tracking-widest uppercase">Agência de Marketing Digital</p>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Transformamos{" "}
            <span className="relative">
              Cliques
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            em Clientes e{" "}
            <span className="text-purple-900/80">Estratégias</span>{" "}
            em Resultados Reais
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-light">
            Marketing digital que gera leads qualificados e aumenta suas vendas de verdade.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/5511962256902", "_blank")}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            QUERO FALAR AGORA!
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div className="w-2 h-2 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}