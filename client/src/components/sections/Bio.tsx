import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, Terminal } from "lucide-react";

export function Bio() {
  return (
    <section id="bio" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
              <User className="h-8 w-8 text-primary" />
              Bio & Interests
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                I am an aspiring engineering student at <strong>Bergen County Academies</strong>, driven by a deep curiosity for how things work and how they can be improved.
              </p>
              <p className="mb-6">
                My passion lies at the intersection of <strong>Engineering</strong> and <strong>Computer Science</strong>. I believe that the most impactful solutions come from bridging the gap between hardware and software—creating systems that are not only functional but also intelligent.
              </p>
              <p>
                I am actively looking for opportunities to apply my skills in real-world scenarios, whether through internships, collaborative projects, or research.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-xl -z-10" />
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <Terminal className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Current Focus</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Exploring advanced fabrication techniques in the Makerspace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Developing integrated electronic systems with Arduino</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Designing efficient mechanical parts using Fusion 360</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
