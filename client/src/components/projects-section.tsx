import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Microscope, Bot } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Broom Service",
      period: "July 2025 - Present",
      icon: Smartphone,
      description: "Mobile-first house chore management app that automates task rotation, sends real-time reminders, and tracks completion for shared households.",
      features: [
        "React Native frontend with Expo Go",
        "Push notifications & offline sync",
        "AWS Lambda & DynamoDB integration",
        "Dynamic task dashboards"
      ],
      technologies: ["React Native", "AWS", "DynamoDB"]
    },
    {
      title: "Skin Cancer Classification",
      period: "Mar 2025 - June 2025",
      icon: Microscope,
      description: "CNN-based computer vision pipeline to classify skin lesions and evaluate model bias across diverse skin tones.",
      features: [
        "91% within-one accuracy",
        "75% precision, 72% recall",
        "Fine-tuned ResNet50 model",
        "StyleGAN2 data augmentation"
      ],
      technologies: ["PyTorch", "Computer Vision", "ResNet50"]
    },
    {
      title: "AI Medicinal Data Agent",
      period: "June 2024",
      icon: Bot,
      description: "AI agent using RAG to analyze medicinal data from a 50k-entry CSV file and PDF documents for comprehensive insights.",
      features: [
        "LlamaIndex for data retrieval",
        "OpenAI API (ChatGPT 3.5 turbo)",
        "Pandas for data processing",
        "RAG architecture"
      ],
      technologies: ["LlamaIndex", "RAG", "OpenAI"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground" data-testid="projects-subtitle">Innovative solutions spanning mobile development, machine learning, and AI applications</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="fade-in">
                <Card className="card-hover border border-border h-full" data-testid={`project-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <IconComponent className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold" data-testid={`project-title-${index}`}>{project.title}</h3>
                        <p className="text-sm text-muted-foreground" data-testid={`project-period-${index}`}>{project.period}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} data-testid={`project-feature-${index}-${featureIndex}`}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" data-testid={`project-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
