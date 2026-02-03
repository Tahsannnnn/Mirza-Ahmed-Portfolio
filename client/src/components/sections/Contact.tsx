import { motion } from "framer-motion";
import { Mail, Phone, User, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground text-lg mb-12">
              I am always open to discussing engineering opportunities, collaborative projects, or STEM initiatives.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Email</h3>
                  <a href="mailto:mirzatahsanahmed@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">mirzatahsanahmed@gmail.com</a>
                  <a href="mailto:mirham29@bergen.org" className="block text-muted-foreground hover:text-primary transition-colors">mirham29@bergen.org</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">201-362-6904</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary shrink-0">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Advisor</h3>
                  <p className="text-muted-foreground">Carlos Nodarse</p>
                  <a href="mailto:carnod@bergen.org" className="text-sm text-muted-foreground hover:text-primary">carnod@bergen.org</a>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can we collaborate?" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
