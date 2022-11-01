// app/routes/home/profile.tsx

// ... renders a modal into a new ProfileSettings component.
// ... retrieves and returns the logged in user's data within a loader function.
// ... uses the useLoaderData hook to access the user data returned from the loader function.
import {
	LoaderFunction,
	ActionFunction,
	redirect,
	json,
} from "@remix-run/node";
import { useLoaderData, useActionData } from "@remix-run/react";
import { Modal } from "~/components/modal";
import { getUser, requireUserId, logout } from "~/utils/auth.server";
//Added the imports needed in the changes made.
import { useState, useEffect, useRef } from "react";
import { FormField } from "~/components/form-field";
import { validateName } from "~/utils/validators.server";
import { updateUser, deleteUser } from "~/utils/user.server";

export const action: ActionFunction = async ({ request }) => {
	const userId = await requireUserId(request);
	const form = await request.formData();
	// Pulls out the form data points you need from the request object.
	let firstName = form.get("firstName");
	let lastName = form.get("lastName");
	const action = form.get("_action");

	switch (action) {
		case "save":
			// Ensures each piece of data you care about is of the string data type.
			if (typeof firstName !== "string" || typeof lastName !== "string") {
				return json({ error: `Invalid Form Data` }, { status: 400 });
			}

			// Validates the data using the validateName function written previously.
			const errors = {
				firstName: validateName(firstName),
				lastName: validateName(lastName),
			};

			if (Object.values(errors).some(Boolean))
				return json(
					{ errors, fields: { firstName, lastName } },
					{ status: 400 }
				);

			// Update the user here...
			await updateUser(userId, {
				firstName,
				lastName,
			});

			// Redirects to the /home route, closing the settings modal.
			return redirect("/home");

		// Delete button is clicked
		case "delete":
			// Perform delete function
			await deleteUser(userId);
			return logout(request);
		default:
			return json({ error: `Invalid Form Data` }, { status: 400 });
	}
};

export const loader: LoaderFunction = async ({ request }) => {
	const user = await getUser(request);
	return json({ user });
};

export default function ProfileSettings() {
	const { user } = useLoaderData();
	const actionData = useActionData();
	const [formError, setFormError] = useState(actionData?.error || "");
	const firstLoad = useRef(true);
	// Created a formData object in state that holds the form's values. This defaults those values to the logged in user's existing profile data.
	const [formData, setFormData] = useState({
		firstName: actionData?.fields?.firstName || user?.profile?.firstName,
		lastName: actionData?.fields?.lastName || user?.profile?.lastName,
	});

	useEffect(() => {
		if (!firstLoad.current) {
			setFormError("");
		}
	}, [formData]);

	useEffect(() => {
		firstLoad.current = false;
	}, []);

	// Created a function that takes in an HTML change event and a field name as parameters. Those are used to update the formData state as input fields' values change in the component.
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		field: string
	) => {
		setFormData((form) => ({ ...form, [field]: event.target.value }));
	};

	return (
		<Modal isOpen={true} className="w-1/3">
			<div className="p-3">
				<h2 className="text-4xl font-semibold text-blue-600 text-center mb-4">
					Your Profile
				</h2>
				<div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2">
					+ {formError}+{" "}
				</div>
				<div className="flex">
					<div className="flex-1">
						<form
							method="post"
							onSubmit={(e) =>
								!confirm("Are you sure?") ? e.preventDefault() : true
							}>
							<FormField
								htmlFor="firstName"
								label="First Name"
								value={formData.firstName}
								onChange={(e) => handleInputChange(e, "firstName")}
								error={actionData?.errors?.firstName}
							/>
							<FormField
								htmlFor="lastName"
								label="Last Name"
								value={formData.lastName}
								onChange={(e) => handleInputChange(e, "lastName")}
								error={actionData?.errors?.lastName}
							/>
							<button
								name="_action"
								value="delete"
								className="rounded-xl w-full bg-red-300 font-semibold text-white mt-4 px-16 py-2 transition duration-300 ease-in-out hover:bg-red-400 hover:-translate-y-1">
								Delete Account
							</button>
							<div className="w-full text-right mt-4">
								<button
									className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-16 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
									name="_action"
									value="save">
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Modal>
	);
}
