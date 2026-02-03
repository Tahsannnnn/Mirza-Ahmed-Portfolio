import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Wrench, Cpu, Monitor, Code2, PenTool } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Fabrication",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["BCA Makerspace", "3D Printing", "Laser Cutting", "CNC Milling", "Woodworking"]
    },
    {
      title: "Electronics",
      icon: <Cpu className="h-5 w-5" />,
      skills: ["Soldering", "Arduino", "Circuit Design", "Microcontrollers", "IoT Basic"]
    },
    {
      title: "CAD & Design",
      icon: <PenTool className="h-5 w-5" />,
      skills: ["Fusion 360 (Autodesk)", "Technical Drawing", "Prototyping", "Photoshop", "Graphic Design"]
    },
    {
      title: "Software",
      icon: <Code2 className="h-5 w-5" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React (Learning)"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-display font-bold mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl">
            A diverse toolkit enabling the transition from concept to functional prototype.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
