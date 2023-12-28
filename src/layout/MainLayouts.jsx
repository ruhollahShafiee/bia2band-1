import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAppContext } from "@/hooks";

import { Layout, theme, Typography } from "antd";
import { Drawers, SettingDrawer } from "@/components";
import MainNavbar from "./components/Navbar";
import MainFooter from "./components/Footer";

const { Text } = Typography;
// layoutModules
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
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
				<Drawers
					title={t("layouts.drawerTitle")}
					open={open}
					onClose={onCloseDrawer}
					placement={placement}
					content={<SettingDrawer {...otherParams} />}
				/>
			</Header>
			<Content>
				{/* children */}
				<Outlet key={"main-layout"} />
				{/* children */}
			</Content>
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

export default MainLayout;
