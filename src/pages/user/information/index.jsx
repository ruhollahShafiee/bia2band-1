import About from "./components/about";
import Connect from "./components/connect";
import FurtherInformation from "./components/furtherinformation";
import Professional from "./components/professional";
import Personal from "./components/personal";

const EditProfile = () => (
	<section className="flex flex-col md:gap-5 gap-2 md:mt-5 mt-1">
		<Personal />
		<Connect />
		<About />
		<Professional />
		<FurtherInformation />
	</section>
);

export default EditProfile;
