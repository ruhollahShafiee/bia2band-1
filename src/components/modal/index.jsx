import { useState, useImperativeHandle } from "react";
import { Modal, theme } from "antd";

const Modals = ({
	title = "",
	width = "70%",
	className = "",
	removeCloseButton = false,
	maskClosable = true,
	destroyOnClose = true,
	keyboard = false,
	centered = true,
	reference,
	children,
}) => {
	const [open, setOpen] = useState(false);
	// hooks
	const { token } = theme.useToken();
	useImperativeHandle(reference, () => ({
		showModal: () => {
			setOpen(true);
		},
		hideModal: () => {
			setOpen(false);
		},
	}));
	//   return
	return (
		<Modal
			title={title}
			width={width}
			className={className}
			keyboard={keyboard}
			destroyOnClose={destroyOnClose}
			maskClosable={maskClosable}
			closable={!removeCloseButton}
			onCancel={() => setOpen(false)}
			centered={centered}
			footer={null}
			open={open}
		>
			<div className="modals-layout" style={{ background: token?.colorPrimaryLighter }}>
				{children}
			</div>
		</Modal>
	);
};

export default Modals;
