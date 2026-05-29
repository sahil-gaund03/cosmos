import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key-replace-in-production";
const key = new TextEncoder().encode(JWT_SECRET);

export interface SessionPayload {
  userId: string;
  role: "admin" | "user";
  email: string;
}

export async function encrypt(payload: SessionPayload): Promise<string> {
  return await new SignJWT(payload as any)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}

export async function decrypt(input: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload as unknown as SessionPayload;
  } catch (error) {
    return null; // Invalid signature, expired, or malformed
  }
}
