import { motion } from "framer-motion";

export function Gallery() {
  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold mb-12">Gallery & Misc</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
          <div className="col-span-2 row-span-2 bg-gray-100 rounded-xl flex items-center justify-center text-muted-foreground">
            Featured Image Placeholder
          </div>
          <div className="bg-gray-100 rounded-xl flex items-center justify-center text-muted-foreground text-sm">
            Image
          </div>
          <div className="bg-gray-100 rounded-xl flex items-center justify-center text-muted-foreground text-sm">
            Image
          </div>
          <div className="col-span-2 bg-gray-100 rounded-xl flex items-center justify-center text-muted-foreground text-sm">
            Wide Image Placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
