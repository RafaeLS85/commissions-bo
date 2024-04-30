import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { PERMISSIONS } from "./constants/permissions";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("X-TOKEN-CORS")?.value;
  const session = jwt.decode(token || "");
  const route = request.nextUrl.pathname;
  const { MASSIVE_CHARGE, REBATES_READ } = PERMISSIONS;

  const s = session as any;
  const permissions = s?.permissions as string[];   

  if (route === "/carga-masiva") {
    if (permissions.includes(MASSIVE_CHARGE)) {
      return NextResponse.redirect(new URL("/", request.url), {
        status: 303,
      });
    }
  }

  if (route === "/proxy/massive-charge") {
    if (permissions.includes(MASSIVE_CHARGE)) {
      return NextResponse.rewrite(new URL(`${process.env.SELLER_COMMISSION_FILE_SERVICE}/batch/upload`), {
        status: 303,
      });
    }
  }

  if (route === "/descuentos-comerciales") {
    if (permissions.includes(REBATES_READ)) {
      return NextResponse.redirect(new URL("/", request.url), {
        status: 303,
      });
    }
  }

  return NextResponse.next();
}
