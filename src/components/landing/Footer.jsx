import { Instagram, Facebook, Linkedin, Youtube, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black text-white mb-4">MIDO</h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transformamos cliques em clientes e estratégias em resultados reais para sua empresa crescer no digital.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/midomktdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              {[Facebook, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Serviços", "Sobre Nós", "Cases", "Blog", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Gestão de Redes Sociais",
                "Tráfego Pago",
                "Branding",
                "CRM & Automação",
                "Consultoria",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 MIDO. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-purple-500" /> em São Paulo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}