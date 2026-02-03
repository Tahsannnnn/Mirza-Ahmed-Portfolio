import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function Competitions() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-display font-bold">Competitions</h2>
        </div>
        
        <div className="border rounded-xl p-12 text-center bg-gray-50 border-dashed">
          <p className="text-muted-foreground">Competition history and awards to be added.</p>
        </div>
      </div>
    </section>
  );
}
