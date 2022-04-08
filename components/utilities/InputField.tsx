type Props = {
	placeholder: string;
	type: string;
	value: string;
	setValue: Function;
};

const InputField = (props: Props) => {
	const { type, placeholder, value, setValue } = props;

	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="border-gray-500 border-2 h-10 p-2 mb-4 rounded-lg"
			/>
		</div>
	);
};

export default InputField;
