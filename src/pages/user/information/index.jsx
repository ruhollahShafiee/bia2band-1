import About from "./components/about";
import Connect from "./components/connect";
import FurtherInformation from "./components/furtherinformation";
import Profesional from "./components/myprofesional";
import Personal from "./components/personal";

const EditProfile = () => (
	<section className="flex flex-col gap-5">
		<Personal />
		<Connect />
		<About />
		<Profesional />
		<FurtherInformation />
	</section>
);

export default EditProfile;
