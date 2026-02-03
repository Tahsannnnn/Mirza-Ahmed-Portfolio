import { motion } from "framer-motion";
import fabricationImg from "../../assets/Fabrication.png";
import convertedFileImg from "../../assets/Converted File.png";

export function Gallery() {
  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold mb-12">Gallery & Misc</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2 bg-gray-100 rounded-xl overflow-hidden group relative">
            <img 
              src={fabricationImg} 
              alt="Fabrication" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-medium">Fabrication</span>
            </div>
          </div>
          
          <div className="col-span-2 bg-gray-100 rounded-xl overflow-hidden group relative">
            <img 
              src={convertedFileImg} 
              alt="Converted File" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium">Converted File</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
            <span className="text-muted-foreground text-sm font-medium">More to come soon</span>
          </div>
          
          <div className="bg-gray-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
            <span className="text-muted-foreground text-sm font-medium">More to come soon</span>
          </div>

          <div className="col-span-2 bg-gray-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
            <span className="text-muted-foreground text-sm font-medium">More to come soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
