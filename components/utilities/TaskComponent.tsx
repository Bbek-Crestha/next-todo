import { taskType } from "@database/DataTypes";
import { ChangeEvent, useState } from "react";

type Props = {
	task: taskType;
};

const TaskComponent = (props: Props) => {
	const { task } = props;
	const [currentTask, setCurrentTask] = useState<taskType>(task);

	const handleChange = (e: ChangeEvent) => {
		setCurrentTask({ ...currentTask, status: !currentTask.status });
	};

	return (
		<div className="flex items-center gap-4 px-4 mb-2 text-xl">
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
	);
};

export default TaskComponent;
