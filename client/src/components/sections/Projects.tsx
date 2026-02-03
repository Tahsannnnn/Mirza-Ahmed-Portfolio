import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Projects() {
  // Placeholder projects for layout
  const projects = [1, 2, 3];

  return (
    <section id="projects" className="py-24 bg-gray-50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Engineering Projects</h2>
            <p className="text-muted-foreground">Recent technical work and prototypes.</p>
          </div>
          <FolderGit2 className="h-8 w-8 text-primary opacity-20" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-muted-foreground/30 font-display font-bold text-4xl">
                    0{item}
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary">View Details</Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Project Title Placeholder</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">
                    Short description of the project goes here. Focusing on the engineering challenges and solutions implemented.
                  </p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex gap-2">
                    <div className="h-2 w-8 bg-primary/20 rounded-full" />
                    <div className="h-2 w-8 bg-primary/20 rounded-full" />
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
