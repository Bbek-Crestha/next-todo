import { NextRequest, NextResponse } from "next/server";

const middleware = (req: NextRequest) => {
	const { cookies } = req;
	const url = req.nextUrl.clone();

	if (url.pathname.includes("/login")) {
		if (cookies.token) {
			url.pathname = "/";
			return NextResponse.redirect(url);
		} else {
			return NextResponse.next();
		}
	}

	if (cookies.token) {
		return NextResponse.next();
	} else {
		url.pathname = "/login";
		return NextResponse.redirect(url);
	}
};

export default middleware;
