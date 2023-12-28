import React from "react";
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
		{ label: "مشخصات شخصی من", icon: UserOutlined },
		{ label: "ارتباط با من", icon: CustomerServiceOutlined },
		{ label: "درباره من", icon: InfoCircleOutlined },
		{ label: "اطلاعات تخصصی من", icon: FileDoneOutlined },
		{ label: "اطلاعات تکمیلی من", icon: SolutionOutlined },
		{ label: "نمونه کار ها", icon: AppstoreOutlined },
		{ label: "نمای کلی پروفایل", icon: IdcardOutlined },
	].map(({ label, icon }) => ({
		key: label,
		icon: React.createElement(icon, { style: { fontSize: "20px" } }),
		label,
	}));
	// option
	const [defaultSelectedKeys] = items;
	// return
	return (
		<Menu
			className="max-w-96 bg-transparent"
			defaultSelectedKeys={defaultSelectedKeys.key}
			mode="inline"
			items={items}
		/>
	);
};

export default UserSidebarMenu;
