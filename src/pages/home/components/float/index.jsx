import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BackTop, FloatButton, Tooltip } from "antd";
import { PhoneOutlined, SearchOutlined, InfoCircleOutlined, UpCircleOutlined } from "@ant-design/icons";

const FloatLabel = () => {
	const { t } = useTranslation();
	return (
		<>
			<FloatButton
				type="primary"
				tooltip={"فیلتر پیشرفته"}
				style={{
					direction: "ltr",
					right: 50,
					bottom: 150,
				}}
				icon={
					<Link to={"search"} className="text-white">
						<SearchOutlined />
					</Link>
				}
			/>
			<FloatButton
				type="primary"
				tooltip={t("header.contactUs")}
				style={{
					direction: "ltr",
					right: 50,
					bottom: 100,
				}}
				icon={
					<Link to={"contact"} className="text-white">
						<PhoneOutlined />
					</Link>
				}
			/>
			<FloatButton
				type="primary"
				tooltip={<span>درباره ما</span>}
				style={{
					direction: "ltr",
					right: 50,
					bottom: 50,
				}}
				icon={
					<Link to={"about"} className="text-white">
						<InfoCircleOutlined />
					</Link>
				}
			/>
			<Tooltip title="بازگشت به بالا" placement="left">
				<BackTop
					className="bg-slate-400 grid place-content-center rounded-full"
					style={{
						direction: "ltr",
						right: 50,
						bottom: 200,
					}}
				>
					<UpCircleOutlined className="text-white text-xl" />
				</BackTop>
			</Tooltip>
		</>
	);
};

export default FloatLabel;
