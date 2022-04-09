import { userType, taskType } from "@database/DataTypes";

export const users: userType[] = [
	{
		name: "Admin",
		email: "admin@test.com",
		password: "admin123",
	},
];

export const tasks: taskType[] = [
	{
		description: "100 side jumps",
		status: true,
	},
	{
		description: "20 pushups",
		status: false,
	},
	{
		description: "10km walk",
		status: false,
	},
];
