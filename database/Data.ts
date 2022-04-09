import { v4 as uuidv4 } from "uuid";

import { userType, taskType } from "@database/DataTypes";

export const users: userType[] = [
	{
		id: uuidv4(),
		name: "Admin",
		email: "admin@test.com",
		password: "admin123",
	},
];

export const tasks: taskType[] = [
	{
		id: uuidv4(),
		description: "100 side jumps",
		status: true,
	},
	{
		id: uuidv4(),
		description: "20 pushups",
		status: false,
	},
	{
		id: uuidv4(),
		description: "10km walk",
		status: false,
	},
];
