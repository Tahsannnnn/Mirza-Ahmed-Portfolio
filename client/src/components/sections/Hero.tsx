import { motion } from "framer-motion";
import { ArrowDown, Cpu, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src={heroBg} 
          alt="Technical Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Cpu className="h-4 w-4" />
              <span>Aspiring Engineering Student</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-foreground"
          >
            Designing the future <br />
            <span className="text-muted-foreground">with precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            Student at Bergen County Academies. Combining engineering principles with computer science to build tangible solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="h-12 px-8 text-base"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 text-base group"
              onClick={() => document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
