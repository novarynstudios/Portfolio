import { z } from "zod";

export const projectTypes = [
  "Minecraft Plugin",
  "Web Platform",
  "Licensing System",
  "Infrastructure",
  "Documentation",
  "Other"
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email.").max(120, "Email is too long."),
  subject: z.string().trim().min(4, "Please add a subject.").max(120, "Subject is too long."),
  projectType: z.enum(projectTypes),
  message: z.string().trim().min(20, "Please share a little more detail.").max(2000, "Message is too long."),
  company: z.string().max(0, "Spam detected.").optional().or(z.literal(""))
});

export type ContactFormValues = z.infer<typeof contactSchema>;
