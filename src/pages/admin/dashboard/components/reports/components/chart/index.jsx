import { Card, Col, Row } from "antd";
import Typography from "antd/es/typography/Typography";

const { Title } = Typography;

const title = "آمار بازدیدها";
const description = "استاد یار/ تخصص های دیگر...استاد یار/ تخصص های دیگر...";

const Chart = () => {
    return (
        <Card bordered >
            <div className="justify-between pt-0 pb-0 p-5">
                <Row gutter={[8, 8]} align={"middle"}>
                    <Col xs={24} md={16} lg={12}>
                        <h3>{title}</h3>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} align={"middle"}>
                    <Col xs={24} md={12} lg={8}>
                        <p className="text-slate-400">{description + description + description}</p>
                    </Col>
                </Row>
                 <div className="grid justify-items-center mt-4">
                      </div>
            </div>
        </Card>
    );
};

export default Chart;