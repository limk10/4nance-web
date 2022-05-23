import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, ev) {
  console.log("midleware");
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect("/lp");
  }
  return NextResponse.next();
}
