// app/utils/auth.server.ts
import { prisma } from "./prisma.server";
import { redirect, json, createCookieSessionStorage } from "@remix-run/node";
import { createUser } from "./user.server";
import type { RegisterForm, LoginForm } from "./types.server";
import bcrypt from "bcryptjs";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
	throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
	cookie: {
		name: "snapper-session",
		secure: process.env.NODE_ENV === "production",
		secrets: [sessionSecret],
		sameSite: "lax",
		path: "/",
		maxAge: 60 * 60 * 24 * 30,
		httpOnly: true,
	},
});

export async function register(user: RegisterForm) {
	const exists = await prisma.user.count({ where: { email: user.email } });
	if (exists) {
		return json(
			{ error: `User already exists with that email` },
			{ status: 400 }
		);
	}

	const newUser = await createUser(user);
	if (!newUser) {
		return json(
			{
				error: `Something went wrong trying to create a new user.`,
				fields: { email: user.email, password: user.password },
			},
			{ status: 400 }
		);
	}
	return createUserSession(newUser.id, "/");
}

export async function login({ email, password }: LoginForm) {
	// Queries for a user with a matching email.
	const user = await prisma.user.findUnique({
		where: { email },
	});

	//Returns a null value if no user is found or the password provided doesn't match the hashed value in the database.
	if (!user || !(await bcrypt.compare(password, user.password)))
		return json({ error: `Incorrect login` }, { status: 400 });

	// Returns the user's id and redirects if all goes well.
	return createUserSession(user.id, "/");
}

// ... creates a new session.
// ... sets the userId of that session to the id of the logged in user.
// ... redirects the user to a route you can specify when calling this function.
// ... commits the session when setting the cookie header.
export async function createUserSession(userId: string, redirectTo: string) {
	const session = await storage.getSession();
	session.set("userId", userId);
	return redirect(redirectTo, {
		headers: {
			"Set-Cookie": await storage.commitSession(session),
		},
	});
}

// requireUserId checks for a user's session. If one exists, it is a success and just returns the userId. If it fails, however, it will redirect the user to the login screen.
// getUserSession grabs the current user's session based on the request's cookie.
// getUserId returns the current user's id from the session storage.
// getUser returns the whole user document associated with the current session. If one is not found, the user is logged out.
// logout destroys the current session and redirects the user to the login screen.
export async function requireUserId(
	request: Request,
	redirectTo: string = new URL(request.url).pathname
) {
	const session = await getUserSession(request);
	const userId = session.get("userId");
	if (!userId || typeof userId !== "string") {
		const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
		throw redirect(`/login?${searchParams}`);
	}
	return userId;
}

function getUserSession(request: Request) {
	return storage.getSession(request.headers.get("Cookie"));
}

async function getUserId(request: Request) {
	const session = await getUserSession(request);
	const userId = session.get("userId");
	if (!userId || typeof userId !== "string") return null;
	return userId;
}

export async function getUser(request: Request) {
	const userId = await getUserId(request);
	if (typeof userId !== "string") {
		return null;
	}

	try {
		const user = await prisma.user.findUnique({
			where: { id: userId },
			select: { id: true, email: true, profile: true },
		});
		return user;
	} catch {
		throw logout(request);
	}
}

export async function logout(request: Request) {
	const session = await getUserSession(request);
	return redirect("/login", {
		headers: {
			"Set-Cookie": await storage.destroySession(session),
		},
	});
}
