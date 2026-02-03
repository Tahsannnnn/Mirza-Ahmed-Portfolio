import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Careers() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-display font-bold">Career Pathways</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-dashed border-gray-300 rounded-lg h-40 flex items-center justify-center text-muted-foreground bg-white">
              STEM Pathway Placeholder {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
