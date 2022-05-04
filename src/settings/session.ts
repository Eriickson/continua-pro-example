import { NextApiRequest, NextApiResponse } from "next";
import { Session, SessionOptions, withIronSession } from "next-iron-session";

export type NextIronRequest = NextApiRequest & { session: Session };
export type NextIronHandler = (
  req: NextIronRequest,
  res: NextApiResponse
) => void | Promise<void>;

export type NextMiddleware = (req: NextIronRequest, ev: any) => any;

export function withSession(
  handler: NextIronHandler | NextMiddleware,
  maxAge: number = 5400
) {
  return withIronSession(handler, {
    password: String(process.env.SECRET_COOKIE_PASSWORD),
    cookieName: "session",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      maxAge, // 30 days
      secure: process.env.NODE_ENV === "production" ? true : false,
      httpOnly: true,
    },
  });
}
