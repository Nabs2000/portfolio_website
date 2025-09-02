import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineering Researcher",
      company: "University of California, Davis",
      location: "Davis, CA",
      period: "Nov 2024 - June 2025",
      responsibilities: [
        "Developed data analysis and visualization pipelines in Python and R on an HPC cluster in Dr. Megan Dennis's lab, processing 10+ TB of genomic data to extract actionable biological insights.",
        "Designed and deployed over 20 automated, data-processing pipelines with Snakemake, Bash scripting, and Slurm, significantly reducing manual effort and runtime variability.",
        "Integrated open-source tools containerized with Docker to ensure reproducibility and efficiency across diverse bioinformatics tasks within the genomic pipeline."
      ]
    },
    {
      title: "Machine Learning Researcher",
      company: "University of California, Davis",
      location: "Davis, CA",
      period: "Mar 2024 - Oct 2024",
      responsibilities: [
        "Developed, trained, and evaluated deep learning models (CNN, TCN) using TensorFlow in Dr. Laura Marcu's lab to predict clean fluorescence signals from noisy tumor data, looking at R² and domain-specific metrics for model validation.",
        "Ensured model robustness by performing a random hyperparameter search using Optuna and K-Fold cross-validation with a held-out test set for final model training.",
        "Synthesized findings into a lab-reviewed scientific report that generated interdisciplinary interest and initiated collaborative research efforts."
      ]
    },
    {
      title: "System Engineering Co-Op",
      company: "iRhythm Technologies",
      location: "San Francisco, CA",
      period: "Jan 2023 - Sep 2023",
      responsibilities: [
        "Conducted over 20 system verification and validation tests for the Zio AT heart monitoring device, assessing BLE and cellular performance in varying coverage conditions by using DC power analyzers, oscilloscopes, and multimeters.",
        "Leveraged knowledge in Python, data structures, and serial communication to automate a test case, decreasing testing time by 80%.",
        "Designed and implemented a functional battery model for the heart monitoring device by creating a Python-based Monte Carlo simulation that more accurately represented field conditions, using Pytest for unit testing and adhering to SDLC practices."
      ]
    },
    {
      title: "Data Scientist Intern",
      company: "Xtrava Health",
      location: "Santa Clara, CA",
      period: "June 2022 - Sep 2022",
      responsibilities: [
        "Deployed a parsing script to process raw data into a neat Excel spreadsheet from 500+ digital COVID-19 sensors using Python and MATLAB.",
        "Implemented and presented Python visualization scripts to pinpoint improvement in Xtrava's COVID-19 detection algorithm."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="experience-title">Professional Experience</h2>
          <p className="text-xl text-muted-foreground" data-testid="experience-subtitle">Building innovative solutions across research and industry</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="fade-in mb-12">
              <Card className="card-hover border border-border" data-testid={`experience-${index}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary" data-testid={`experience-title-${index}`}>{exp.title}</h3>
                      <p className="text-lg text-muted-foreground" data-testid={`experience-company-${index}`}>{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground lg:text-right mt-2 lg:mt-0">
                      <p data-testid={`experience-location-${index}`}>{exp.location}</p>
                      <p data-testid={`experience-period-${index}`}>{exp.period}</p>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start" data-testid={`experience-responsibility-${index}-${respIndex}`}>
                        <ChevronRight className="text-primary mt-1.5 mr-3 h-3 w-3 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
