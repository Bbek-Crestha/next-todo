import { userType, taskType } from "./DataTypes";

export const users: userType[] = [
	{
		name: "Admin",
		email: "admin@test.com",
		password: "admin123",
	},
];

export const tasks: taskType[] = [
	{
		task: "100 side jumps",
		state: "completed",
	},
	{
		task: "20 pushups",
		state: "completed",
	},
	{
		task: "10km walk",
		state: "todo",
	},
];
