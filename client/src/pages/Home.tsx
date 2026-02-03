import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Competitions } from "@/components/sections/Competitions";
import { Gallery } from "@/components/sections/Gallery";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Projects />
        <Skills />
        <Education />
        <Competitions />
        <Gallery />
        <Careers />
        <Contact />
      </main>
      
      <footer className="py-8 bg-foreground text-background text-center text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Mirza Tahsan Ahmed. Engineering Portfolio.</p>
        </div>
      </footer>
    </div>
  );
}
