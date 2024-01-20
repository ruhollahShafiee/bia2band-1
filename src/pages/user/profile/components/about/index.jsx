import { Typography, Card, Row, Col } from "antd";
import img from "../test.jpg";
import { Buttons } from "../../../../../components";

const { Title } = Typography;
const { Meta } = Card;

const title1 = "درباره من";
const title2 = "نمونه کار ویدئویی من";
const description = "استادیار/تخصص های دیگر...استادیار/تخصص های دیگر...استادیار/تخصص های دیگر...";

const About = () => {
    return (
        <Card bordered >
            <div className="justify-between pt-0 pb-0 p-5">
                <Row gutter={[8, 8]} align={"middle"}>
                    <Col xs={24} md={16} lg={12}>
                        <h3>{title1}</h3>
                    </Col>
                    <Col xs={24} md={16} lg={12}>
                        <div className=" grid justify-items-center">
                            <h3>{title2}</h3>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} align={"middle"}>
                    <Col xs={24} md={16} lg={12}>
                        <p className="text-slate-400">{description + description + description + description + description}</p>
                    </Col>
                    <Col xs={24} md={16} lg={12}>
                        <div className="grid justify-items-center">
                            <video controls poster={img} height={200} width={200} className="rounded-md">
                                <source src={img} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} justify={"end"} align={"middle"}>
                    <Col xs={24} md={16} lg={12}>
                        <div className="grid justify-items-center mt-4">
                            <Buttons content={<span className="text-xs">مشاهده همه ی کارها</span>}
                                type="default"
                                htmlType="button"
                                classes="float-end"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </Card>
    );
};

export default About;