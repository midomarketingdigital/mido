import { motion } from "framer-motion";
import { Share2, Target, BarChart3, Users, Megaphone, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Share2,
    title: "Gestão de Redes Sociais",
    description: "Desenvolvemos estratégias de marketing personalizadas com base em Inbound Marketing. Realizamos pesquisa de mercado, identificação de problemas do público, definição da buyer persona, análise da concorrência e validação de mercado.",
    features: [
      "Estratégia de conteúdo completa",
      "Linha editorial para cada etapa do funil",
      "Produção e publicação de conteúdo",
      "Relatórios detalhados de métricas",
    ],
  },
  {
    icon: Target,
    title: "Gestão de Tráfego Pago",
    description: "Nosso foco é gerar resultados reais para sua empresa através de tráfego pago estratégico aliado ao CRM, garantindo que nenhum lead se perca no caminho.",
    features: [
      "Planejamento estratégico de campanhas",
      "Copys persuasivas e criativos impactantes",
      "Acompanhamento em tempo real via CRM",
      "Relatórios mensais detalhados",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 font-bold uppercase tracking-widest text-sm">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mt-4">
            Nossos Serviços
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-500 border border-purple-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="outline"
                className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-bold rounded-full px-6 transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional services row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { icon: BarChart3, title: "Análise de Dados", desc: "Métricas e insights para tomada de decisão" },
            { icon: Users, title: "CRM & Automação", desc: "Gestão completa do funil de vendas" },
            { icon: Megaphone, title: "Branding", desc: "Construção e fortalecimento de marca" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-purple-50 transition-colors duration-300 group cursor-pointer"
            >
              <item.icon className="w-10 h-10 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}