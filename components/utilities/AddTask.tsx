import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import InputField from "./InputField";
import { taskType } from "@database/DataTypes";

type Props = {
	tasks: taskType[];
	setTasks: Function;
};

const AddTask = (props: Props) => {
	const { tasks, setTasks } = props;
	const [openField, setOpenField] = useState<boolean>(false);
	const [task, setTask] = useState<string>("");

	const handleAdd = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (task !== "") {
			const newTask: taskType = {
				id: uuidv4(),
				description: task,
				status: false,
			};

			setTasks([...tasks, newTask]);
		}

		setTask("");
		setOpenField(false);
	};

	const handleClose = () => {
		setTask("");
		setOpenField(false);
	};

	return (
		<div className="text-center">
			{openField ? (
				<form onSubmit={handleAdd} className="flex justify-between">
					<InputField
						type="text"
						placeholder="New Task"
						value={task}
						setValue={setTask}
						margin={0}
						autoFocus={true}
					/>

					<button
						type="submit"
						className="text-2xl font-bold bg-green-500 px-3 rounded-full"
					>
						+
					</button>

					<button
						type="reset"
						onClick={handleClose}
						className="text-xl font-bold bg-red-500 px-3 rounded-full"
					>
						x
					</button>
				</form>
			) : (
				<button
					onClick={() => setOpenField(true)}
					className="bg-blue-500 rounded-lg py-1 px-4 mt-2 font-semibold"
				>
					Add new task
				</button>
			)}
		</div>
	);
};

export default AddTask;
