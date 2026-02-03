import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          Education & Experience
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-muted-foreground uppercase tracking-wider text-sm">Academic Background</h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/20 pb-8"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
              <div className="mb-1 text-sm text-primary font-medium">Current</div>
              <h4 className="text-2xl font-bold mb-2">Bergen County Academies</h4>
              <p className="text-muted-foreground mb-4">Engineering & Design</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Focusing on Makerspace technologies, Interactive Design, and Electronics. Developing a strong foundation in both theoretical and practical engineering principles.
              </p>
            </motion.div>
          </div>

          {/* Projects/Experience Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-muted-foreground uppercase tracking-wider text-sm">Key Projects</h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span>Remote Operated Vehicle (ROV)</span>
                    <Award className="h-5 w-5 text-yellow-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Collaborated with Microsoft and classmates to design and prototype an ROV dedicated to cleaning our local creek.
                  </p>
                  <div className="p-4 bg-muted/50 rounded-lg text-sm border border-border">
                    <strong>Highlight:</strong> Displayed prototypes in Lower Manhattan to industry leaders, including the creator of Adobe Acrobat.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
