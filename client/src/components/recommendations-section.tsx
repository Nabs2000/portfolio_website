import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, User } from "lucide-react";

export default function RecommendationsSection() {
  const recommendations = [
    {
      role: "Principal Investigator",
      organization: "UC Davis",
      quote: "Exceptional research capabilities in genomic data analysis and machine learning applications."
    },
    {
      role: "Engineering Manager",
      organization: "iRhythm Technologies",
      quote: "Outstanding automation skills and system engineering expertise that significantly improved our testing processes."
    },
    {
      role: "Colleague",
      organization: "iRhythm Technologies",
      quote: "If you are looking for a thoughtful, talented, organized, and personable engineer, I strongly recommend Nabeel."
    }
  ];

  return (
    <section id="recommendations" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="recommendations-title">Recommendations</h2>
          <p className="text-xl text-muted-foreground" data-testid="recommendations-subtitle">What colleagues and mentors say about my work</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <p className="text-center text-muted-foreground mb-8" data-testid="linkedin-reference">
            For detailed LinkedIn recommendations and endorsements, please visit my{" "}
            <a 
              href="https://www.linkedin.com/in/nabeel-sabzwari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
              data-testid="link-linkedin"
            >
              LinkedIn profile <ExternalLink className="inline h-3 w-3 ml-1" />
            </a>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <div key={index} className="fade-in">
                <Card className="border border-border h-full" data-testid={`recommendation-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <User className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold" data-testid={`recommendation-role-${index}`}>{rec.role}</h4>
                        <p className="text-sm text-muted-foreground" data-testid={`recommendation-org-${index}`}>{rec.organization}</p>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic" data-testid={`recommendation-quote-${index}`}>
                      "{rec.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
