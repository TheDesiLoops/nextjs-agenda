import agenda from "@/agenda-instance";
import { NextResponse } from "next/server";

export async function GET() {
  agenda.now("HelloJob");
  return NextResponse.json({ hello: "Next.js" });
}
