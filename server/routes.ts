import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      // Path to the resume PDF in public directory
      const resumePath = path.join(process.cwd(), 'public', 'Nabeel_Sabzwari_Resume.pdf');
      
      // Check if file exists
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ error: "Resume file not found" });
      }

      // Set headers for file download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Nabeel_Sabzwari_Resume.pdf"');
      
      // Stream the file
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
      
      fileStream.on('error', (error) => {
        console.error('Error streaming resume file:', error);
        if (!res.headersSent) {
          res.status(500).json({ error: "Error downloading resume" });
        }
      });
      
    } catch (error) {
      console.error('Resume download error:', error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
