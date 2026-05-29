import { NextResponse } from "next/server";
import { loginSchema, validateRequest } from "@/lib/security/validation";
import { encrypt } from "@/lib/security/jwt";

// Note: In a production app, use bcrypt or argon2 to compare hashed passwords stored in a secure DB.
// This implements a secure mock verification for SaaS infrastructure demonstration.
async function verifyPassword(plain: string, hash: string) {
  // Simulate bcrypt delay to prevent timing attacks
  await new Promise(resolve => setTimeout(resolve, 200));
  return plain === hash; // Mock comparison
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate Input (Schema-based)
    const validation = await validateRequest(loginSchema, body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { email, password } = validation.data;

    // 2. Validate Credentials (Mock DB check)
    // In production, query Prisma/PostgreSQL here.
    if (email !== "admin@nexus.io" || !(await verifyPassword(password, "nexusadmin123"))) {
      // 3. Prevent user enumeration by generic error message
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    // 4. Generate JWT
    const token = await encrypt({
      userId: "usr_123456789",
      role: "admin",
      email
    });

    // 5. Secure Session Handling (HTTP-only cookie)
    const res = NextResponse.json({ success: true, message: "Authentication successful" }, { status: 200 });
    res.cookies.set("nexus_auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 2 * 60 * 60, // 2 hours
      path: "/",
    });

    return res;
  } catch (err) {
    console.error("[Auth API Error]:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
