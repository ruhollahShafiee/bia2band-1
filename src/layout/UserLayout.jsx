import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { notificationMaker } from "@/utils/notification";
import { authSelector } from "@/store/selector";

import { Loadings } from "@/components";
import UserSidebarMenu from "./components/User/Menu";

const UserLayout = () => {
	// hooks
	const { t } = useTranslation();
	const navigation = useNavigate();
	const { user, loading } = useSelector(authSelector);
	// authentication
	if (loading) {
		return <Loadings />;
	}
	if (user) { // *** !user ***
		notificationMaker(t("برای دسترسی به این بخش وارد حساب کاربری خود شوید"));
		navigation("/");
		return <Loadings />;
	}
	// return
	return (
		<div className="mx-auto max-w-8xl p-2 sm:px-6 lg:px-14 w-screen grid grid-flow-col gap-2 min-h-[400px]">
			<div className="col-span-1">
				<UserSidebarMenu />
			</div>
			<div className="col-span-12">
				{/* children */}
				<Outlet key={"user-layout"} />
				{/* children */}
			</div>
		</div>
	);
};

export default UserLayout;
