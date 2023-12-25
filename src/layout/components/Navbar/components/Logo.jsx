import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Typography } from "antd";
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export default function LogoSection({ user, linkClass }) {
	const { t } = useTranslation();
	// return
	return (
		<div className="hidden sm:block">
			<div className="flex mx-3">
				{!user && (
					<NavLink to={"/contact-us"} className={`mx-1`}>
						<Paragraph className={linkClass}>
							<PhoneOutlined className="mx-2 text-lg" rotate={90} />
							{t("header.contactUs")}
						</Paragraph>
					</NavLink>
				)}
				<NavLink to={"/auth"} className={`mx-1`}>
					<Paragraph className={linkClass}>
						<UserOutlined className="mx-2 text-lg" />
						{t("header.auth")}
					</Paragraph>
				</NavLink>
			</div>
		</div>
	);
}
