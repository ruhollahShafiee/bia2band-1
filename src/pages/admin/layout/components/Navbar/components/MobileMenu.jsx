import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Dropdown } from "antd";
import {
	ReadOutlined,
	HomeOutlined,
	MenuOutlined,
	WindowsOutlined,
	UserAddOutlined,
	SaveOutlined,
	CommentOutlined,
} from "@ant-design/icons";

export default function NavbarMobileMenu({ user }) {
	const { t } = useTranslation();
	// MenuProps
	const items = [
		{
			key: "1",
			icon: <HomeOutlined />,
			label: <NavLink to={"/"}>{t("")}</NavLink>,
		},
		{
			key: "2",
			icon: <SaveOutlined />,
			label: <NavLink href={"/sample"}>{t("")}</NavLink>,
		},
		{
			key: "3",
			icon: <ReadOutlined />,
			label: <NavLink href={"/blog"}>{t("")}</NavLink>,
		},
		{
			key: "4",
			icon: <WindowsOutlined />,
			label: <NavLink href={"/about"}>{t("")}</NavLink>,
		},
		{
			key: "5",
			icon: <CommentOutlined />,
			label: <NavLink href={"/contact"}>{t("")}</NavLink>,
		},
		{
			key: "6",
			icon: <UserAddOutlined />,
			label: <NavLink href={"/auth"}>{t("")}</NavLink>,
		},
	];
	// return
	return (
		<Dropdown menu={{ items: items.splice(0, user ? 5 : 6) }}>
			<MenuOutlined className="text-xl text-white mx-2 mb-2" />
		</Dropdown>
	);
}
