import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+300%", label: "Aumento em Leads" },
  { icon: Users, value: "150+", label: "Clientes Atendidos" },
  { icon: Target, value: "95%", label: "Taxa de Conversão" },
  { icon: Award, value: "5 Anos", label: "No Mercado" },
];

const testimonials = [
  {
    text: "A MIDO transformou completamente nossa presença digital. Em 3 meses, triplicamos nossos leads qualificados!",
    author: "Maria Silva",
    role: "CEO, Tech Solutions",
    avatar: "👩‍💼",
  },
  {
    text: "Profissionais incríveis! A integração entre tráfego pago e CRM fez toda a diferença para nosso time comercial.",
    author: "João Santos",
    role: "Diretor Comercial, Nomikos",
    avatar: "👨‍💼",
  },
  {
    text: "Resultados reais desde o primeiro mês. Recomendo fortemente para quem quer crescer de verdade!",
    author: "Ana Costa",
    role: "Fundadora, Aloe Vera Spa",
    avatar: "👩‍🔬",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 font-bold uppercase tracking-widest text-sm">
            Resultados Comprovados
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Números que Falam
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-purple-500 group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-bold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}