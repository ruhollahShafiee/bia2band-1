import About from "./components/about";
import MyProfile from "./components/myProfile";
import MySkills from "./components/mySkills";

const UserProfilePage = () => {
	return (
		<section className="flex flex-col gap-5 mt-5">
			<MyProfile />
			<About />
			<MySkills />
		</section>
	);
};

export default UserProfilePage;
