import { theme } from "antd";

import Personal from "../information/components/personal";
import Connect from "../information/components/connect";
import About from "../information/components/about";
import MyProfesional from "./components/profesional";
import FurtherInfo from "./components/furtherinformation";
import Portfolio from "./components/portfo";
import Description from "./components/description";

const Skills = () => {
	const {
		token: { colorBgBase },
	} = theme.useToken();
	return (
		<section className="flex flex-col gap-5">
			<Personal />
			<Connect />
			<About />
			<MyProfesional />
			<FurtherInfo />
			<Portfolio bgColor={colorBgBase} />
			<Description />
		</section>
	);
};

export default Skills;
