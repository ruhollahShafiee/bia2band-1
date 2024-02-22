import About from "./components/about";
import MyProfile from "./components/myProfile";
import MySkills from "./components/mySkills";

const UserProfilePage = () => {
	return (
		<section className="flex flex-col md:gap-5 gap-2 md:mt-5 mt-1">
			<MyProfile />
			<About />
			<MySkills />
		</section>
	);
};

export default UserProfilePage;
