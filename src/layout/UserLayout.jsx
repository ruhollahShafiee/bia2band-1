import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { notificationMaker } from "@/utils/notification";
import { authSelector } from "@/store/selector";

import { Loadings, ProfileCard } from "@/components";
import UserSidebarMenu from "./components/User/Menu";

const UserLayout = () => {
	// hooks
	const { t } = useTranslation();
	const navigation = useNavigate();
	const { user, loading } = useSelector(authSelector, {
		equalityFn: ({ user }, { user: nextState }) => !!user !== !!nextState,
	});
	// authentication
	if (loading) {
		return <Loadings />;
	}
	if (user) {
		// *** !user ***
		notificationMaker(t("برای دسترسی به این بخش وارد حساب کاربری خود شوید"));
		navigation("/");
		return <Loadings />;
	}
	// return
	return (
		<div className="mx-auto max-w-[1400px] p-2 sm:px-6 lg:px-14 w-screen min-h-[400px]  grid grid-cols-5 gap-2">
			<div className="col-span-1 md:mt-5 mt-1">
				<ProfileCard {...user} />
				<UserSidebarMenu />
			</div>
			<div className="col-span-4">
				{/* children */}
				<Outlet key={"user-layout"} />
				{/* children */}
			</div>
		</div>
	);
};

export default UserLayout;
