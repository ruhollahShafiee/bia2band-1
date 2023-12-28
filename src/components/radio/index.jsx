import { Form, Radio } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const { Group } = Radio;

const RadioGroup = ({
	plainOptions = [], // label,value
	onChange = () => {},
	initialValue,
	classes = "",
	extraClasses = "",
	label = "",
	name = "",
	required,
	size = "middle",
	buttonStyle = "solid", // outline
	optionType = "default", // button
}) => {
	const [value, setValue] = useState();
	const { t } = useTranslation();
	// handles
	const handleOnChange = (value) => {
		setValue(value);
		onChange(value);
	};
	// options
	const rules = [
		{
			required: required,
			message: t("schemas.required"),
		},
	];
	// return
	return (
		<Form.Item
			labelCol={{ xs: 24 }}
			wrapperCol={{ xs: 24 }}
			className={classes}
			label={label}
			name={name}
			initialValue={initialValue}
			rules={rules}
		>
			<Group
				size={size}
				name={name}
				optionType={optionType}
				defaultValue={initialValue}
				onChange={(e) => handleOnChange(e.target.value)}
				options={plainOptions}
				className={extraClasses}
				buttonStyle={buttonStyle}
				value={value}
			/>
		</Form.Item>
	);
};

export default RadioGroup;
