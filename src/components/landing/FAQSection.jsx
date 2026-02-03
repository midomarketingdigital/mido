import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros resultados geralmente aparecem entre 30 e 90 dias, dependendo da estratégia implementada. O tráfego pago gera resultados mais rápidos, enquanto o trabalho orgânico em redes sociais leva um pouco mais de tempo para consolidar.",
  },
  {
    question: "Qual o investimento mínimo para começar?",
    answer: "Trabalhamos com diferentes pacotes para atender empresas de todos os tamanhos. Entre em contato para uma consultoria gratuita e descobrir qual plano se encaixa melhor no seu negócio.",
  },
  {
    question: "Vocês atendem empresas de qualquer segmento?",
    answer: "Sim! Nossa metodologia se adapta a diferentes segmentos de mercado. Temos experiência com e-commerces, prestadores de serviço, clínicas, escritórios de advocacia, entre outros.",
  },
  {
    question: "Como funciona o processo de onboarding?",
    answer: "Iniciamos com um briefing detalhado para entender seu negócio, público-alvo e objetivos. Em seguida, fazemos uma análise de mercado e concorrência para criar uma estratégia personalizada.",
  },
  {
    question: "Posso acompanhar os resultados em tempo real?",
    answer: "Sim! Oferecemos acesso a dashboards em tempo real e enviamos relatórios mensais detalhados com todas as métricas e insights para acompanhar o crescimento do seu negócio.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e metodologia
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  openIndex === index
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white hover:bg-purple-50 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-bold text-lg ${openIndex === index ? "text-white" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-white" : "text-purple-500"
                    }`}
                  />
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-white/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}