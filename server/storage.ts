import { 
  type Program, 
  type InsertProgram,
  type Inquiry,
  type InsertInquiry,
  type Worksheet,
  type InsertWorksheet,
  type QuizProgress,
  type InsertQuizProgress,
  type EmailCapture,
  type InsertEmailCapture
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Programs
  getPrograms(): Promise<Program[]>;
  getProgram(id: string): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;
  updateProgram(id: string, program: Partial<InsertProgram>): Promise<Program | undefined>;
  deleteProgram(id: string): Promise<boolean>;

  // Inquiries
  getInquiries(): Promise<Inquiry[]>;
  getInquiry(id: string): Promise<Inquiry | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  deleteInquiry(id: string): Promise<boolean>;

  // Worksheets
  getWorksheets(): Promise<Worksheet[]>;
  getWorksheet(id: string): Promise<Worksheet | undefined>;
  createWorksheet(worksheet: InsertWorksheet): Promise<Worksheet>;
  updateWorksheet(id: string, worksheet: Partial<InsertWorksheet>): Promise<Worksheet | undefined>;
  deleteWorksheet(id: string): Promise<boolean>;

  // Quiz Progress
  getQuizProgress(email: string): Promise<QuizProgress[]>;
  createQuizProgress(progress: InsertQuizProgress): Promise<QuizProgress>;

  // Email Captures
  getEmailCaptures(): Promise<EmailCapture[]>;
  createEmailCapture(capture: InsertEmailCapture): Promise<EmailCapture>;
}

export class MemStorage implements IStorage {
  private programs: Map<string, Program>;
  private inquiries: Map<string, Inquiry>;
  private worksheets: Map<string, Worksheet>;
  private quizProgress: QuizProgress[];
  private emailCaptures: Map<string, EmailCapture>;

  constructor() {
    this.programs = new Map();
    this.inquiries = new Map();
    this.worksheets = new Map();
    this.quizProgress = [];
    this.emailCaptures = new Map();
  }

  // Programs
  async getPrograms(): Promise<Program[]> {
    return Array.from(this.programs.values());
  }

  async getProgram(id: string): Promise<Program | undefined> {
    return this.programs.get(id);
  }

  async createProgram(insertProgram: InsertProgram): Promise<Program> {
    const id = randomUUID();
    const program: Program = { 
      ...insertProgram, 
      id,
      description: insertProgram.description ?? null,
      imageUrl: insertProgram.imageUrl ?? null
    };
    this.programs.set(id, program);
    return program;
  }

  async updateProgram(id: string, update: Partial<InsertProgram>): Promise<Program | undefined> {
    const program = this.programs.get(id);
    if (!program) return undefined;
    const updated: Program = { 
      ...program, 
      ...update,
      description: update.description === undefined ? program.description : update.description ?? null,
      imageUrl: update.imageUrl === undefined ? program.imageUrl : update.imageUrl ?? null
    };
    this.programs.set(id, updated);
    return updated;
  }

  async deleteProgram(id: string): Promise<boolean> {
    const deleted = this.programs.delete(id);
    if (deleted) {
      Array.from(this.inquiries.values())
        .filter(inq => inq.programId === id)
        .forEach(inq => {
          this.inquiries.set(inq.id, { ...inq, programId: null });
        });
    }
    return deleted;
  }

  // Inquiries
  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }

  async getInquiry(id: string): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id,
      programId: insertInquiry.programId ?? null,
      message: insertInquiry.message ?? null,
      createdAt: new Date() 
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async deleteInquiry(id: string): Promise<boolean> {
    return this.inquiries.delete(id);
  }

  // Worksheets
  async getWorksheets(): Promise<Worksheet[]> {
    return Array.from(this.worksheets.values());
  }

  async getWorksheet(id: string): Promise<Worksheet | undefined> {
    return this.worksheets.get(id);
  }

  async createWorksheet(insertWorksheet: InsertWorksheet): Promise<Worksheet> {
    const id = randomUUID();
    const worksheet: Worksheet = { 
      ...insertWorksheet, 
      id,
      fileUrl: insertWorksheet.fileUrl ?? null
    };
    this.worksheets.set(id, worksheet);
    return worksheet;
  }

  async updateWorksheet(id: string, update: Partial<InsertWorksheet>): Promise<Worksheet | undefined> {
    const worksheet = this.worksheets.get(id);
    if (!worksheet) return undefined;
    const updated: Worksheet = { 
      ...worksheet, 
      ...update,
      fileUrl: update.fileUrl === undefined ? worksheet.fileUrl : update.fileUrl ?? null
    };
    this.worksheets.set(id, updated);
    return updated;
  }

  async deleteWorksheet(id: string): Promise<boolean> {
    return this.worksheets.delete(id);
  }

  // Quiz Progress
  async getQuizProgress(email: string): Promise<QuizProgress[]> {
    return this.quizProgress.filter(p => p.email === email);
  }

  async createQuizProgress(insertProgress: InsertQuizProgress): Promise<QuizProgress> {
    const id = randomUUID();
    const progress: QuizProgress = { 
      ...insertProgress, 
      id, 
      completedAt: new Date() 
    };
    this.quizProgress.push(progress);
    return progress;
  }

  // Email Captures
  async getEmailCaptures(): Promise<EmailCapture[]> {
    return Array.from(this.emailCaptures.values());
  }

  async createEmailCapture(insertCapture: InsertEmailCapture): Promise<EmailCapture> {
    const normalizedEmail = insertCapture.email.toLowerCase().trim();
    const existing = Array.from(this.emailCaptures.values()).find(
      c => c.email.toLowerCase().trim() === normalizedEmail
    );
    if (existing) return existing;

    const id = randomUUID();
    const capture: EmailCapture = { 
      ...insertCapture,
      email: normalizedEmail,
      id, 
      createdAt: new Date() 
    };
    this.emailCaptures.set(id, capture);
    return capture;
  }
}

export const storage = new MemStorage();
