// app/utils/types.server.ts

// THe semicolons ';' might need to be removed, as they are added by VS code automatically, but they are not in the tutorial guide
export type RegisterForm = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

export type LoginForm = {
	email: string;
	password: string;
};
