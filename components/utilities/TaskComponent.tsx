import { taskType } from "@database/DataTypes";
import { ChangeEvent, useState } from "react";

type Props = {
	task: taskType;
	tasks: taskType[];
	setTasks: Function;
};

const TaskComponent = (props: Props) => {
	const { task, tasks, setTasks } = props;
	const [currentTask, setCurrentTask] = useState<taskType>(task);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentTask({ ...currentTask, status: e.target.checked });
	};

	const handleDelete = () => {
		const newArray = tasks.filter((task) => task.id !== currentTask.id);
		setTasks(newArray);
	};

	return (
		<div className="px-4 mb-2 flex justify-between items-center bg-gray-300 rounded-lg p-4">
			<div className="flex items-center gap-4 text-xl">
				<input
					type="checkbox"
					checked={currentTask.status}
					onChange={handleChange}
					className="h-4 w-4 cursor-pointer"
				/>
				<p className={currentTask.status ? "line-through text-gray-700" : ""}>
					{currentTask.description}
				</p>
			</div>

			<button
				onClick={handleDelete}
				className="bg-white rounded-full p-2 text-sm text-red-600 font-semibold"
			>
				Delete
			</button>
		</div>
	);
};

export default TaskComponent;
