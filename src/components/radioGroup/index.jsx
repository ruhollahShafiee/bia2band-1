import { Form, Radio } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const RadioGroup = ({
	plainOptions = [], // label,value
	onChange = () => {},
	initialValue,
	classes = "",
	extraClasses = "",
	label = "",
	name = "",
	required,
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
			<Radio.Group
				defaultValue={initialValue}
				onChange={(e) => handleOnChange(e.target.value)}
				options={plainOptions}
				className={extraClasses}
				value={value}
			/>
		</Form.Item>
	);
};

export default RadioGroup;
