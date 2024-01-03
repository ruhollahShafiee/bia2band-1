import { theme } from "antd";

import Personal from "../information/components/personal";
import Connect from "../information/components/connect";
import About from "../information/components/about";
import MyProfesional from "./components/profesional";
import FurtherInfo from "./components/furtherinformation";
import Portfolio from "./components/portfo";
import Description from "./components/description";

const Skills = () => {
    const {token:{ colorBgBase }} = theme.useToken()
    return (
        <div className="pb-10">
            <div className="mb-5">
                <Personal/>
            </div>
            <div className="mb-5">
                <Connect />
            </div>
            <div className="mb-5">
                <About />
            </div>
            <div className="mb-5">
                <MyProfesional />
            </div>
            <div className="mb-5">
                <FurtherInfo />
            </div>
            <div className="mb-5">
                <Portfolio bgColor={colorBgBase} />
            </div>
            <div className="mb-5">
                <Description />
            </div>
        </div>
    )
}

export default Skills;