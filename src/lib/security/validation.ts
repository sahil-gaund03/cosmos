import { z } from "zod";

// ==========================================
// NEXUS COSMOS - Input Validation Schemas
// ==========================================

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address format." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(100, { message: "Password exceeds maximum length." }),
});

export const aiQuerySchema = z.object({
  query: z
    .string()
    .min(2, { message: "Query too short." })
    .max(500, { message: "Query too long. Please condense your question." })
    // Basic sanitization: block common injection strings
    .refine((val) => !val.includes("DROP TABLE") && !val.includes("<script>"), {
      message: "Invalid characters detected in query payload.",
    }),
});

export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.string().optional(),
});

// Generic helper to validate API requests
export async function validateRequest<T>(
  schema: z.ZodSchema<T>,
  data: any
): Promise<{ success: true; data: T } | { success: false; error: string }> {
  try {
    const validData = await schema.parseAsync(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: (error as any).errors.map((e: any) => e.message).join(", ") };
    }
    return { success: false, error: "Internal validation error." };
  }
}
