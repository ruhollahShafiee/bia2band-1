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

export const links = [
	{ to: "/", title: "صفحه نخست", key: "1", icon: <HomeOutlined /> },
	{ to: "/dashboard", title: "داشبورد", key: "2", icon: <SaveOutlined /> },
	{ to: "/user", title: "هم بندی ها", key: "3", icon: <ReadOutlined /> },
	{ to: "/user", title: "کارها", key: "4", icon: <WindowsOutlined /> },
	{ to: "/blogs", title: "بلاگ", key: "5", icon: <CommentOutlined /> },
	{ to: "/about", title: "درباره ما", key: "6", icon: <UserAddOutlined /> },
	{ to: "/contact", title: "تماس با ما", key: "6", icon: <UserAddOutlined /> },
];

export default function NavbarMobileMenu({ user }) {
	const { t } = useTranslation();
	// MenuProps
	const items = links.map(({ key, icon, title, to }) => ({
		key,
		icon,
		label: (
			<NavLink key={key} to={to}>
				{t(title)}
			</NavLink>
		),
	}));
	// return
	return (
		<Dropdown menu={{ items: items.splice(0, user ? 5 : 6) }}>
			<MenuOutlined className="text-xl" />
		</Dropdown>
	);
}
