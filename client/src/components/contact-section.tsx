import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="contact-title">Get In Touch</h2>
          <p className="text-xl text-muted-foreground" data-testid="contact-subtitle">Let's connect and discuss opportunities</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="fade-in">
              <Card className="border border-border text-center card-hover" data-testid="contact-email">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a 
                    href="mailto:nabeelsabz101@gmail.com" 
                    className="text-primary hover:underline"
                    data-testid="link-email"
                  >
                    nabeelsabz101@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in">
              <Card className="border border-border text-center card-hover" data-testid="contact-phone">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <a 
                    href="tel:+14082188885" 
                    className="text-primary hover:underline"
                    data-testid="link-phone"
                  >
                    (408) 218-8885
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center fade-in">
            <div className="flex justify-center space-x-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-4"
                asChild
                data-testid="button-linkedin"
              >
                <a 
                  href="https://www.linkedin.com/in/nabeel-sabzwari/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-4"
                asChild
                data-testid="button-email-contact"
              >
                <a href="mailto:nabeelsabz101@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
