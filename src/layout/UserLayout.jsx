import { Outlet } from "react-router-dom";

import UserSidebarMenu from "./components/User/Menu";

const UserLayout = () => {
	// return
	return (
		<div className="mx-auto max-w-8xl p-2 sm:px-6 lg:px-14 w-screen grid grid-flow-col gap-2 min-h-[400px]">
			<div className="col-span-1">
				<UserSidebarMenu />
			</div>
			<div className="col-span-12">
				{/* children */}
				<Outlet key={"user-layout"} />
				{/* children */}
			</div>
		</div>
	);
};

export default UserLayout;
