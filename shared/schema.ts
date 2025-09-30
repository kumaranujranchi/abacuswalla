import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const programs = pgTable("programs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  ageRange: text("age_range").notNull(),
  duration: text("duration").notNull(),
  description: text("description"),
  benefits: text("benefits").array().notNull(),
  curriculum: text("curriculum").array().notNull(),
  color: text("color").notNull(),
  imageUrl: text("image_url"),
});

export const insertProgramSchema = createInsertSchema(programs).omit({
  id: true,
}).extend({
  benefits: z.array(z.string()).min(1, "At least one benefit is required"),
  curriculum: z.array(z.string()).min(1, "At least one curriculum item is required"),
});

export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type Program = typeof programs.$inferSelect;

export const inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  parentName: text("parent_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  childName: text("child_name").notNull(),
  childAge: text("child_age").notNull(),
  programId: varchar("program_id"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

export const worksheets = pgTable("worksheets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  grade: text("grade").notNull(),
  topic: text("topic").notNull(),
  description: text("description").notNull(),
  fileUrl: text("file_url"),
});

export const insertWorksheetSchema = createInsertSchema(worksheets).omit({
  id: true,
}).extend({
  fileUrl: z.string().url("Invalid file URL").optional(),
});

export type InsertWorksheet = z.infer<typeof insertWorksheetSchema>;
export type Worksheet = typeof worksheets.$inferSelect;

export const quizProgress = pgTable("quiz_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  quizSlug: text("quiz_slug").notNull(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  completedAt: timestamp("completed_at").defaultNow().notNull(),
});

export const insertQuizProgressSchema = createInsertSchema(quizProgress).omit({
  id: true,
  completedAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  score: z.number().int().nonnegative(),
  totalQuestions: z.number().int().positive(),
});

export type InsertQuizProgress = z.infer<typeof insertQuizProgressSchema>;
export type QuizProgress = typeof quizProgress.$inferSelect;

export const emailCaptures = pgTable("email_captures", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  source: text("source").notNull(),
  metadata: text("metadata"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertEmailCaptureSchema = createInsertSchema(emailCaptures).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  source: z.enum(["newsletter", "worksheet", "quiz", "olympiad"]),
  metadata: z.string().optional(),
});

export type InsertEmailCapture = z.infer<typeof insertEmailCaptureSchema>;
export type EmailCapture = typeof emailCaptures.$inferSelect;
