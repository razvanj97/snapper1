// app/utils/user.server.ts

// It hashes the password provided in the registration form because you should not store it as plain-text.
// It stores the new User document using Prisma.
// It returns the id and email of the new user.
import bcrypt from "bcryptjs";
import type { RegisterForm } from "./types.server";
import { prisma } from "./prisma.server";
import { Profile } from "@prisma/client";

export const createUser = async (user: RegisterForm) => {
	const passwordHash = await bcrypt.hash(user.password, 10);
	const newUser = await prisma.user.create({
		data: {
			email: user.email,
			password: passwordHash,
			profile: {
				firstName: user.firstName,
				lastName: user.lastName,
			},
		},
	});
	return { id: newUser.id, email: user.email };
};

export const getOtherUsers = async (userId: string) => {
	return prisma.user.findMany({
		where: {
			id: userId,
		},
		orderBy: {
			profile: {
				firstName: "asc",
			},
		},
	});
};

// Create a new function in app/utils/user.server.ts that returns a single user based on their id:
export const getUserById = async (userId: string) => {
	return await prisma.user.findUnique({
		where: {
			id: userId,
		},
	});
};
// The query above finds the unique record in the database with the given id. The findUnique function allows you to filter your query using uniquely identifying fields, or fields with values that must be unique to that record within your database.

export const updateUser = async (userId: string, profile: Partial<Profile>) => {
	await prisma.user.update({
		where: {
			id: userId,
		},
		data: {
			profile: {
				update: profile,
			},
		},
	});
};

export const deleteUser = async (id: string) => {
	await prisma.user.delete({ where: { id } });
};
