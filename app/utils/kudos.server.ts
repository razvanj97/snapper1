// app/utils/kudos.server.ts

// Passes in the message string and style embedded document.
// Connects the new kudo to the appropriate author and recipient using the ids passed to the function.
import { prisma } from "./prisma.server";
import { KudoStyle, Prisma } from "@prisma/client";

export const createKudo = async (
	message: string,
	userId: string,
	recipientId: string,
	style: KudoStyle
) => {
	await prisma.kudo.create({
		data: {
			// 1
			message,
			style,
			// 2
			author: {
				connect: {
					id: userId,
				},
			},
			recipient: {
				connect: {
					id: recipientId,
				},
			},
		},
	});
};

export const getFilteredKudos = async (
	userId: string,
	sortFilter: Prisma.KudoOrderByWithRelationInput,
	whereFilter: Prisma.KudoWhereInput
) => {
	return await prisma.kudo.findMany({
		select: {
			id: true,
			style: true,
			message: true,
			author: {
				select: {
					profile: true,
				},
			},
		},
		orderBy: {
			...sortFilter,
		},
		where: {
			recipientId: userId,
			...whereFilter,
		},
	});
};

export const getRecentKudos = async () => {
	return await prisma.kudo.findMany({
		take: 3,
		orderBy: {
			createdAt: "desc",
		},
		select: {
			style: {
				select: {
					emoji: true,
				},
			},
			recipient: {
				select: {
					id: true,
					profile: true,
				},
			},
		},
	});
};
