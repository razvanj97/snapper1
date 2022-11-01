// app/routes/index.ts

// The loader above will first check if a user is logged in when they hit the / route. The requireUserId function will redirect to /login if there isn't a valid session.
// If there is a valid session, the loader returns a redirect to the /home page.
import { LoaderFunction, redirect } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
	await requireUserId(request);
	return redirect("/home");
};
