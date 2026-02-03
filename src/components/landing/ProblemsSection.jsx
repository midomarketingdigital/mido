import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const problems = [
  "Ninguém conhece sua marca",
  "Poucos leads qualificados para o time comercial",
  "Leads qualificados que não avançam no funil de vendas",
  "Falta de integração entre Marketing e Vendas",
  "Dependência de indicações que já não geram resultados como antes",
];

export default function ProblemsSection() {
  return (
    <section className="bg-purple-400 py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side - Question */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
                Seu negócio tem dificuldade para gerar leads, aumentar visibilidade e vendas?
              </h2>
              <p className="text-purple-500 text-xl font-bold mt-6">
                E tem problemas com:
              </p>
            </div>

            {/* Right side - Problems list */}
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-purple-600 text-lg font-medium">{problem}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}