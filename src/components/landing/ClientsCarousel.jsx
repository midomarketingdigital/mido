import { motion } from "framer-motion";

const clients = [
  { name: "Aloe Vera", logo: "🌿" },
  { name: "CSM", logo: "⭐" },
  { name: "ZN", logo: "💎" },
  { name: "Fabiola Fortunato", logo: "✨" },
  { name: "Nomikos", logo: "🏛️" },
  { name: "Silvia", logo: "💜" },
  { name: "Instituto Shiwa", logo: "🧘" },
  { name: "Tech Solutions", logo: "💻" },
];

export default function ClientsCarousel() {
  return (
    <section className="bg-purple-500 py-8 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-500 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-500 to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white/90 whitespace-nowrap"
            >
              <span className="text-3xl">{client.logo}</span>
              <span className="text-xl font-semibold tracking-wide">{client.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}