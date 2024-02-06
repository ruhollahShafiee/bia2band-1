import { Suspense, useRef } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "antd";
import { DownOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

import { Modals } from "@/components";
import Auth from "../../Auth";

const { Paragraph } = Typography;

export default function LogoSection({ user, linkClass }) {
	const { t } = useTranslation();
	const authRef = useRef();
	// handles
	const handleModal = (mode) => {
		switch (mode) {
			case "show":
				return authRef.current.showModal();
			default:
				return authRef.current.hideModal();
		}
	};
	// return
	return (
		<>
			<div className="hidden sm:block">
				<div className="flex mx-3">
					{!user && (
						<Paragraph
							className={`${linkClass} mx-1 cursor-pointer tracking-tighter`}
							onClick={() => handleModal("show")}
						>
							<PhoneOutlined className="mx-2 text-lg" />
							<span className="pb-1">{t("تماس با ما")}</span>
							<UserOutlined className="mx-2 text-lg"/>
							<span className="pb-1">{t("سامان حشمتی")}</span>
							<DownOutlined className="text-sm"/>
						</Paragraph>
					)}
				</div>
			</div>
			<Modals
				reference={authRef}
				width="40%"
				content={
					<Suspense fallback={null}>
						<Auth />
					</Suspense>
				}
			/>
		</>
	);
}
