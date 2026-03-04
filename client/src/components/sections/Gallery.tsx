import { motion } from "framer-motion";
import fabricationImg from "../../assets/Fabrication.png";
import convertedFileImg from "../../assets/Converted File.png";
import solderImg from "../../assets/Solder.jpeg";
import MicrosoftImg from "../../assets/unnamed.jpg";
import curaImg from "../../assets/curaslicer.png";

export function Gallery() {
  const images = [
    { src: fabricationImg, alt: "Fabrication", label: "Fabrication" },
    { src: convertedFileImg, alt: "Circuitry", label: "Circuitry" },
    { src: solderImg, alt: "Soldering Work", label: "Soldering Work" },
    { src: MicrosoftImg, alt: "Microsoft Headquarters", label: "Visit To Microsoft Headquarters" },
    { src: curaImg, alt: "Cura Slicer", label: "Cura Slicer Layout" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold mb-12 text-center">
          Gallery & Misc
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 text-center">
                <span className="text-white font-display font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
          
          {/* Placeholder for future growth */}
          <div className="bg-gray-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-200 p-8 text-center group hover:bg-gray-100/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-gray-400">+</span>
            </div>
            <span className="text-muted-foreground font-medium">
              More Projects Incoming
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
