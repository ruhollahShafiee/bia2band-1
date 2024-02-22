import { Suspense, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";

import { Buttons } from "@/components";
import { Modals } from "@/components";
import TicketModal from "./ticketModal";

const { Paragraph } = Typography;

export default function NewTicket({ user, linkClass }) {
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
			<div className="flex md:mx-3 justify-end">
				{!user && (
					<>
						<Buttons content={t("تیکت جدید")}
							onClick={() => handleModal("show")}
							type="primary"
							htmlType="button"
						/>
					</>
				)}
			</div>
			<Modals
				reference={authRef}
				width="40%"
				content={
					<Suspense fallback={null}>
						<TicketModal />
					</Suspense>
				}
			/>
		</>
	);
}
