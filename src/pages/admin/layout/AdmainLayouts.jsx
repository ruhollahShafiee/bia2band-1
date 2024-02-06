import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAppContext } from "@/hooks";

import { Layout, theme, Typography } from "antd";
import MainNavbar from "./components/Navbar";
import MainFooter from "./components/Footer";
import UserSidebarMenu from "./components/User/Menu";

const { Text } = Typography;
// layoutModules
const { Header, Content, Footer } = Layout;

const AdminLayout = () => {
	const [open, setOpen] = useState(false);
	// hooks
	const { t } = useTranslation();
	const { token } = theme.useToken();
	// theme
	const { direction, placement, ...otherParams } = useAppContext();
	// handles
	const onCloseDrawer = useCallback((navAction) => {
		setOpen(navAction ? (perValue) => !perValue : false);
	}, []);
	// return
	return (
		<Layout dir={direction}>
			<Header style={{ background: token?.colorPrimaryLight, height: 50 }}>
				<MainNavbar {...{ onCloseDrawer, token }} />
			</Header>
			<div className="mx-auto max-w-[1400px] p-2 sm:px-6 lg:px-14 w-screen min-h-[400px]  grid grid-cols-5 gap-2">
			<div className="col-span-1 gap-2">
				<UserSidebarMenu />
				</div>
			<div className="col-span-4">
			<Content>
				{/* children */}
				<Outlet key={"admin-layout"} />
				{/* children */}
			</Content>
			</div>
			</div>
			<Footer>
				<MainFooter />
				<div
					style={{ background: token?.colorPrimaryLight, border: "1px solid", height: 50 }}
					className="grid place-content-center rounded-lg mt-3"
				>
					<Text className="">تمام حقوق این سایت متعلق به بیا تو بند می باشد</Text>
				</div>
			</Footer>
		</Layout>
	);
};

export default AdminLayout;
