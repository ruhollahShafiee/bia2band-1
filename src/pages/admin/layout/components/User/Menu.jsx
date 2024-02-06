import React from "react";
import { Link } from "react-router-dom";
import { Card, Menu } from "antd";
import {
	DesktopOutlined,
	IdcardOutlined,
	MailOutlined,
	MessageOutlined,
	ReadOutlined,
	RetweetOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { ProfileCard } from "../../../../../components";

const UserSidebarMenu = () => {
	const items = [
		{ label: "پیشخوان من", icon: DesktopOutlined, path: "" },
		{ label: "پروفایل من", icon: UserOutlined, path: "contact" },
		{ label: "تیکت پشتیبانی", icon: MailOutlined, path: "tickets" },
		{ label: "تراکنش های مالی", icon: RetweetOutlined, path: "skills" },
		{ label: "درخواست ها و پیام ها", icon: MessageOutlined, path: "information" },
		{ label: "گواهینامه و مدارک", icon: ReadOutlined, path: "portfolio" },
		{ label: "علاقه مندی ها", icon: IdcardOutlined, path: "view" },
	];
	// option
	const [defaultSelectedKeys] = items;
	// return
	return (
		<div className="mt-5">
		<ProfileCard />
		<Card className="mt-2">
		<Menu className="max-w-96 bg-transparent" defaultSelectedKeys={defaultSelectedKeys.label} mode="inline">
			{items.map(({ label, icon, path }) => (
				<Menu.Item key={label} icon={React.createElement(icon, { style: { fontSize: "20px" } })}>
					<Link to={path}>{label}</Link>
				</Menu.Item>
			))}
		</Menu>
		</Card>
		</div>
	);
};

export default UserSidebarMenu;
