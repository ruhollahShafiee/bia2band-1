import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
	AppstoreOutlined,
	CustomerServiceOutlined,
	FileDoneOutlined,
	IdcardOutlined,
	InfoCircleOutlined,
	SolutionOutlined,
	UserOutlined,
} from "@ant-design/icons";

const UserSidebarMenu = () => {
	const items = [
		{ label: "مشخصات شخصی من", icon: UserOutlined, path: "" },
		{ label: "ارتباط با من", icon: CustomerServiceOutlined, path: "contact" },
		{ label: "درباره من", icon: InfoCircleOutlined, path: "about" },
		{ label: "اطلاعات تخصصی من", icon: FileDoneOutlined, path: "skills" },
		{ label: "اطلاعات تکمیلی من", icon: SolutionOutlined, path: "information" },
		{ label: "نمونه کار ها", icon: AppstoreOutlined, path: "portfolio" },
		{ label: "نمای کلی پروفایل", icon: IdcardOutlined, path: "view" },
	];
	// option
	const [defaultSelectedKeys] = items;
	// return
	return (
		<Menu className="max-w-96 bg-transparent" defaultSelectedKeys={defaultSelectedKeys.label} mode="inline">
			{items.map(({ label, icon, path }) => (
				<Menu.Item key={label} icon={React.createElement(icon, { style: { fontSize: "20px" } })}>
					<Link to={path}>{label}</Link>
				</Menu.Item>
			))}
		</Menu>
	);
};

export default UserSidebarMenu;
