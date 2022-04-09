import { taskType } from "@database/DataTypes";

type Props = {
	task: taskType;
};

const TaskComponent = (props: Props) => {
	const {
		task: { description, status },
	} = props;

	return (
		<div className="flex items-center gap-2 px-4 mb-2">
			<input type="checkbox" className="h-4 w-4 cursor-pointer" />
			<p className="text-xl">{description}</p>
		</div>
	);
};

export default TaskComponent;
