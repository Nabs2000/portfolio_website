import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const programmingLanguages = [
    "Python", "JavaScript", "TypeScript", "C/C++", "Java", "R", "SQL", "MATLAB"
  ];

  const technologies = [
    "PyTorch", "TensorFlow", "React.js", "Next.js", "AWS", "Docker", "LangChain", "Hugging Face"
  ];

  const specializations = [
    "Machine Learning", "Bioinformatics", "Computer Vision", "Data Analysis", "HPC", "RAG Systems"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="about-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            A dedicated researcher and engineer with expertise in machine learning, bioinformatics, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6" data-testid="background-title">Background</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="background-paragraph-1">
              Currently pursuing a Master's degree in Computer Science at UC Davis with a 3.7 GPA, I bring a unique 
              interdisciplinary perspective with my background in Bioengineering from UC Berkeley.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="background-paragraph-2">
              My research experience spans genomic data analysis, deep learning for medical applications, and 
              automated bioinformatics pipelines. I've contributed to cutting-edge research in Dr. Megan Dennis's 
              and Dr. Laura Marcu's labs, processing terabytes of data and developing innovative ML solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="background-paragraph-3">
              In industry, I've applied my skills at companies like iRhythm Technologies and Xtrava Health, 
              focusing on system engineering, automation, and data science applications in healthcare technology.
            </p>
          </div>

          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6" data-testid="skills-title">Technical Skills</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-primary" data-testid="programming-languages-title">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang) => (
                  <Badge key={lang} variant="secondary" data-testid={`skill-${lang.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-primary" data-testid="technologies-title">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" data-testid={`tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-3 text-primary" data-testid="specializations-title">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <Badge key={spec} className="bg-primary/10 text-primary hover:bg-primary/20" data-testid={`spec-${spec.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
