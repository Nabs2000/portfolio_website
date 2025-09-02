import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science",
      field: "Computer Science",
      school: "University of California, Davis",
      period: "Sep 2023 - June 2025",
      gpa: "3.7",
      courses: ["Probability Models for Computer Science", "Machine Learning and Discovery", "Genomics"]
    },
    {
      degree: "Bachelor of Science",
      field: "Bioengineering",
      school: "University of California, Berkeley",
      period: "Aug 2020 - Dec 2022",
      gpa: "3.8",
      courses: ["Python Fundamentals", "Data Structures and Algorithms", "Data Science", "Robotics"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="education-title">Education</h2>
          <p className="text-xl text-muted-foreground" data-testid="education-subtitle">Academic foundation in computer science and bioengineering</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="fade-in">
              <Card className="card-hover border border-border h-full" data-testid={`education-${index}`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="text-primary h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary" data-testid={`education-degree-${index}`}>{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground" data-testid={`education-field-${index}`}>{edu.field}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium" data-testid={`education-school-${index}`}>{edu.school}</p>
                    <p className="text-muted-foreground" data-testid={`education-period-${index}`}>{edu.period}</p>
                    <p className="text-lg font-semibold text-primary mt-2" data-testid={`education-gpa-${index}`}>GPA: {edu.gpa}</p>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Badge key={course} variant="secondary" data-testid={`education-course-${course.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
