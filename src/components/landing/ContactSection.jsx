import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/5511962256902?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-500 font-bold uppercase tracking-widest text-sm">
              Fale Conosco
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Vamos Transformar seu Negócio Juntos?
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Estamos prontos para entender suas necessidades e criar uma estratégia personalizada que vai impulsionar seus resultados.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Telefone</div>
                  <div className="font-bold text-gray-900">(11) 96225-6902</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">E-mail</div>
                  <div className="font-bold text-gray-900">contato@midomkt.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Localização</div>
                  <div className="font-bold text-gray-900">São Paulo, SP</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white mt-10 px-8 py-6 text-lg font-bold rounded-full shadow-lg shadow-green-500/30"
              onClick={() => window.open("https://wa.me/5511962256902", "_blank")}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Falar pelo WhatsApp
            </Button>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">
                Solicite uma Consultoria Gratuita
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl focus:border-white"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl focus:border-white"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl focus:border-white"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Conte-nos sobre seu negócio e objetivos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl focus:border-white min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-purple-500 hover:bg-gray-100 font-bold py-6 rounded-xl text-lg"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}