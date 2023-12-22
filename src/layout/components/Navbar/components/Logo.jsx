import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PhoneOutlined, UserOutlined } from "@ant-design/icons";

export default function LogoSection({ user }) {
	const { t } = useTranslation();
	// return
	return (
		<div className="hidden sm:block">
			<div className="flex">
				{!user && (
					<NavLink
						to={"/contact-us"}
						className="mx-4 mt-2 text-sm hover:text-orange-500 no-underline"
					>
						<PhoneOutlined className="mx-2 text-xl" rotate={90} />
						{t("header.contactUs")}
					</NavLink>
				)}
				<NavLink to={"/auth"} className="mx-4 mt-2 text-sm hover:text-orange-500 no-underline">
					<UserOutlined className="mx-2 text-xl" />
					{t("header.auth")}
				</NavLink>
			</div>
		</div>
	);
}
