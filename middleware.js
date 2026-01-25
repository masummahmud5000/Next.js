
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware (request) {

    const token = request.cookies.get('access_token')?.value
    if (!token && request.nextUrl.pathname.startsWith('/dash')){
        return NextResponse.redirect(new URL('/login', request.url));
    }else{
        return NextResponse.next();
    }

}
export const config = {
    matcher: ['/dash:path*']
}