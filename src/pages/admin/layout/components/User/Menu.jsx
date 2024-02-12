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
import { ProfileCard } from "@/components";

const UserSidebarMenu = () => {
	const items = [
		{ label: "پیشخوان من", icon: DesktopOutlined, path: "" },
		{ label: "پروفایل من", icon: UserOutlined, path: "reports" },
		{ label: "تیکت پشتیبانی", icon: MailOutlined, path: "" },
		{ label: "تراکنش های مالی", icon: RetweetOutlined, path: "wallet" },
		{ label: "درخواست ها و پیام ها", icon: MessageOutlined, path: "" },
		{ label: "گواهینامه و مدارک", icon: ReadOutlined, path: "" },
		{ label: "علاقه مندی ها", icon: IdcardOutlined, path: "" },
	];
	// option
	const [defaultSelectedKeys] = items;
	// return
	return (
		<div className="mt-5">
		<ProfileCard />
		<div className="mt-2 bg-white rounded-lg">
		<Menu className="max-w-96 bg-transparent" defaultSelectedKeys={defaultSelectedKeys.label} mode="inline">
			{items.map(({ label, icon, path }) => (
				<Menu.Item key={label} icon={React.createElement(icon, { style: { fontSize: "20px" } })}>
					<Link to={path}>{label}</Link>
				</Menu.Item>
			))}
		</Menu>
		</div>
		</div>
	);
};

export default UserSidebarMenu;
