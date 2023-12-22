import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SettingOutlined } from "@ant-design/icons";

import { useAppContext } from "@/hooks";

import { Col, Layout, Row, theme } from "antd";
import { Drawers, SettingDrawer } from "@/components";

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
	const onCloseDrawer = () => {
		setOpen(false);
	};
	// return
	return (
		<Layout className="main-layout" dir={direction}>
			<Header style={{ background: token.colorPrimaryLight, height: 50 }}>
				<Row justify="end">
					<Col className="gutter-row">
						<SettingOutlined
							className="text-xl"
							onClick={() => setOpen((perValue) => !perValue)}
						/>
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
					</Col>
				</Row>
			</Header>
			<Content style={{ background: token?.colorPrimaryLighter, height: "calc(100vh - 50px)" }}>
				{/* children */}
				<Outlet />
				{/* children */}
			</Content>
		</Layout>
	);
};

export default MainLayout;
