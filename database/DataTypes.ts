export type userType = {
	name: string;
	email: string;
	password: string;
};

export type taskType = {
	task: string;
	state: "todo" | "completed";
};
