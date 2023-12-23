import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { SettingOutlined } from "@ant-design/icons";

import { userSelector } from "@/store/selector";

import logo from "/vite.svg";
import LogoSection from "./components/Logo";
import NavbarMobileMenu from "./components/MobileMenu";

const MainNavbar = ({ onCloseDrawer, token }) => {
	const user = useSelector(userSelector);
	// links
	const links = [
		{ to: "/", title: "صفحه نخست" },
		{ to: "/sample", title: "هم بندی ها" },
		{ to: "/blog", title: "کار ها" },
		{ to: "/about", title: "بلاگ" },
		{ to: "/contact", title: "درباره ما" },
	];
	// return
	const hoverClass = `hover:text-[${token?.colorPrimary}]`;
	return (
		<div className="relative flex h-12 items-center justify-between">
			{/* NavbarMobileMenu */}
			<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<NavbarMobileMenu user={user} />
			</div>
			{/* MenuSection */}
			<div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
				<div className="hidden sm:mx-5 sm:block">
					<div className="flex space-x-7">
						<img src={logo} alt="logo" className="pl-10" />
						{links.map(({ title, ...linkOptions }) => (
							<NavLink key={title} {...linkOptions} className={`${hoverClass} pt-2`}>
								{title}
							</NavLink>
						))}
					</div>
				</div>
			</div>
			{/* LogoSection */}
			<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
				<LogoSection user={user} hoverClass={hoverClass} />
				<SettingOutlined className="text-xl mr-3 pt-2" onClick={() => onCloseDrawer("navAction")} />
				<div className="hidden hover:text-[#1677ff]" />
				<div className="hidden hover:text-[#1c4e80]" />
				<div className="hidden hover:text-[#1dc362]" />
				<div className="hidden hover:text-[#d32d41]" />
				<div className="hidden hover:text-[#1c4e80]" />
			</div>
		</div>
	);
};

export default MainNavbar;
