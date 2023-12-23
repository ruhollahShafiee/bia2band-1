import { Button, Form } from "antd";

const Buttons = ({
	onClick = () => {},
	loading = false,
	disabled = false,
	content,
	type = "primary",
	htmlType = "button",
	classes = "",
	block,
	size = "large",
}) => {
	// return
	return (
		<Form.Item>
			<Button
				size={size}
				block={block}
				loading={loading}
				type={type}
				htmlType={htmlType}
				onClick={onClick}
				disabled={disabled}
				className={classes}
			>
				{content}
			</Button>
		</Form.Item>
	);
};

export default Buttons;
