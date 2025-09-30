import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertProgramSchema, 
  insertInquirySchema, 
  insertWorksheetSchema, 
  insertQuizProgressSchema,
  insertEmailCaptureSchema 
} from "@shared/schema";
import { z } from "zod";

const updateProgramSchema = insertProgramSchema.partial();
const updateWorksheetSchema = insertWorksheetSchema.partial();
const emailParamSchema = z.object({ email: z.string().email() });
const idParamSchema = z.object({ id: z.string().uuid() });

export async function registerRoutes(app: Express): Promise<Server> {
  // Programs
  app.get("/api/programs", async (req, res) => {
    try {
      const programs = await storage.getPrograms();
      res.json(programs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch programs" });
    }
  });

  app.get("/api/programs/:id", async (req, res) => {
    try {
      idParamSchema.parse(req.params);
      const program = await storage.getProgram(req.params.id);
      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }
      res.json(program);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to fetch program" });
    }
  });

  app.post("/api/programs", async (req, res) => {
    try {
      const validated = insertProgramSchema.parse(req.body);
      const program = await storage.createProgram(validated);
      res.status(201).json(program);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to create program" });
    }
  });

  app.patch("/api/programs/:id", async (req, res) => {
    try {
      idParamSchema.parse(req.params);
      const validated = updateProgramSchema.parse(req.body);
      const program = await storage.updateProgram(req.params.id, validated);
      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }
      res.json(program);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to update program" });
    }
  });

  app.delete("/api/programs/:id", async (req, res) => {
    try {
      idParamSchema.parse(req.params);
      const deleted = await storage.deleteProgram(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Program not found" });
      }
      res.status(204).send();
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to delete program" });
    }
  });

  // Inquiries
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  app.post("/api/inquiries", async (req, res) => {
    try {
      const validated = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validated);
      res.status(201).json(inquiry);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to submit inquiry" });
    }
  });

  app.delete("/api/inquiries/:id", async (req, res) => {
    try {
      idParamSchema.parse(req.params);
      const deleted = await storage.deleteInquiry(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Inquiry not found" });
      }
      res.status(204).send();
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to delete inquiry" });
    }
  });

  // Worksheets
  app.get("/api/worksheets", async (req, res) => {
    try {
      const worksheets = await storage.getWorksheets();
      res.json(worksheets);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch worksheets" });
    }
  });

  app.get("/api/worksheets/:id", async (req, res) => {
    try {
      idParamSchema.parse(req.params);
      const worksheet = await storage.getWorksheet(req.params.id);
      if (!worksheet) {
        return res.status(404).json({ message: "Worksheet not found" });
      }
      res.json(worksheet);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to fetch worksheet" });
    }
  });

  app.post("/api/worksheets", async (req, res) => {
    try {
      const validated = insertWorksheetSchema.parse(req.body);
      const worksheet = await storage.createWorksheet(validated);
      res.status(201).json(worksheet);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to create worksheet" });
    }
  });

  app.patch("/api/worksheets/:id", async (req, res) => {
    try {
      idParamSchema.parse(req.params);
      const validated = updateWorksheetSchema.parse(req.body);
      const worksheet = await storage.updateWorksheet(req.params.id, validated);
      if (!worksheet) {
        return res.status(404).json({ message: "Worksheet not found" });
      }
      res.json(worksheet);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to update worksheet" });
    }
  });

  app.delete("/api/worksheets/:id", async (req, res) => {
    try {
      idParamSchema.parse(req.params);
      const deleted = await storage.deleteWorksheet(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Worksheet not found" });
      }
      res.status(204).send();
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to delete worksheet" });
    }
  });

  app.post("/api/worksheets/:id/download", async (req, res) => {
    try {
      idParamSchema.parse(req.params);
      const worksheet = await storage.getWorksheet(req.params.id);
      if (!worksheet) {
        return res.status(404).json({ message: "Worksheet not found" });
      }

      const captureData = insertEmailCaptureSchema.parse({
        email: req.body.email,
        source: "worksheet"
      });
      await storage.createEmailCapture(captureData);

      res.json({ fileUrl: worksheet.fileUrl });
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to process download" });
    }
  });

  // Quiz Progress
  app.get("/api/quiz-progress/:email", async (req, res) => {
    try {
      emailParamSchema.parse(req.params);
      const normalizedEmail = req.params.email.toLowerCase().trim();
      const progress = await storage.getQuizProgress(normalizedEmail);
      res.json(progress);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to fetch quiz progress" });
    }
  });

  app.post("/api/quiz-progress", async (req, res) => {
    try {
      const validated = insertQuizProgressSchema.parse(req.body);
      const normalizedData = {
        ...validated,
        email: validated.email.toLowerCase().trim()
      };
      const progress = await storage.createQuizProgress(normalizedData);
      res.status(201).json(progress);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to save quiz progress" });
    }
  });

  // Email Captures
  app.get("/api/email-captures", async (req, res) => {
    try {
      const captures = await storage.getEmailCaptures();
      res.json(captures);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch email captures" });
    }
  });

  app.post("/api/email-captures", async (req, res) => {
    try {
      const normalizedBody = {
        ...req.body,
        email: req.body.email?.toLowerCase().trim()
      };
      const validated = insertEmailCaptureSchema.parse(normalizedBody);
      const capture = await storage.createEmailCapture(validated);
      res.status(201).json(capture);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Failed to capture email" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
