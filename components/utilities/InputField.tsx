type Props = {
	placeholder: string;
	type: string;
	value: string;
	setValue: Function;
	margin: number;
};

const InputField = (props: Props) => {
	const { type, placeholder, value, setValue, margin } = props;

	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className={`border-gray-500 border-2 h-10 p-2 mb-${margin} rounded-lg`}
			/>
		</div>
	);
};

export default InputField;
