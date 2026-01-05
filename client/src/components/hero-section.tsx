import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function HeroSection() {
  const downloadResume = () => {
    // Use base URL for GitHub Pages compatibility
    const resumeUrl = `${import.meta.env.BASE_URL}Nabeel_Sabzwari_Resume.pdf`;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Nabeel_Sabzwari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 gradient-text" data-testid="hero-name">
                Nabeel Sabzwari
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6" data-testid="hero-title">
                Computer Science, M.S. • Machine Learning Researcher • Software Engineer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
                Passionate about developing innovative solutions at the intersection of machine learning, 
                bioinformatics, and software engineering. Experienced in building scalable systems and 
                conducting cutting-edge research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-contact"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  onClick={downloadResume}
                  data-testid="button-download-resume"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="fade-in">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt="Nabeel Sabzwari"
                  className="w-full h-full object-cover"
                  data-testid="hero-avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
