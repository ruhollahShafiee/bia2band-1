import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAppContext } from "@/hooks";

import { Layout, theme } from "antd";
import { Drawers, SettingDrawer } from "@/components";
import MainNavbar from "./components/Navbar";

// layoutModules
const { Header, Content } = Layout;

const MainLayout = () => {
	const [open, setOpen] = useState(false);
	// hooks
	const { t } = useTranslation();
	const { token } = theme.useToken();
	// theme
	const {
		language,
		placement,
		direction,
		changeLanguage,
		themeMode,
		changeTheme,
		fontMode,
		changeFontMode,
		tokens,
		changeTokenMode,
		selectedToken,
	} = useAppContext();
	// handles
	const onCloseDrawer = useCallback((navAction) => {
		setOpen(navAction ? (perValue) => !perValue : false);
	}, []);
	// return
	return (
		<Layout className="main-layout" dir={direction}>
			<Header style={{ background: token.colorPrimaryLight, height: 50 }}>
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<MainNavbar {...{ onCloseDrawer, token }} />
					<Drawers
						title={t("layouts.drawerTitle")}
						open={open}
						onClose={onCloseDrawer}
						placement={placement}
						content={
							<SettingDrawer
								{...{
									language,
									changeLanguage,
									themeMode,
									changeTheme,
									fontMode,
									changeFontMode,
									tokens,
									changeTokenMode,
									selectedToken,
								}}
							/>
						}
					/>
				</div>
			</Header>
			<Content className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				{/* children */}
				<Outlet />
				{/* children */}
			</Content>
		</Layout>
	);
};

export default MainLayout;
