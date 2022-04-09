type Props = {
	placeholder: string;
	type: string;
	value: string;
	setValue: Function;
	margin: number;
	autoFocus: boolean;
};

const InputField = (props: Props) => {
	const { type, placeholder, value, setValue, margin, autoFocus } = props;

	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				autoFocus={autoFocus}
				onChange={(e) => setValue(e.target.value)}
				className={`border-gray-500 border-2 h-10 p-2 mb-${margin} rounded-lg`}
			/>
		</div>
	);
};

export default InputField;
