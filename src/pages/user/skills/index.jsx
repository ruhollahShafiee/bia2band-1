import { theme } from "antd";

import Personal from "../information/components/personal";
import Connect from "../information/components/connect";
import About from "../information/components/about";
import MyProfessional from "./components/profesional";
import FurtherInfo from "./components/furtherinformation";
import Portfolio from "./components/portfo";
import Description from "./components/description";

const Skills = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<section className="flex flex-col gap-2 md:gap-5 mt-1 md:mt-5">
			<Personal />
			<Connect />
			<About />
			<MyProfessional />
			<FurtherInfo />
			<Portfolio bgColor={colorBgContainer} />
			<Description />
		</section>
	);
};

export default Skills;
