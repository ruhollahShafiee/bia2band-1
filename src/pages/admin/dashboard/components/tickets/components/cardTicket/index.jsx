import { AlignLeftOutlined, ContainerOutlined, MailOutlined, StarOutlined } from "@ant-design/icons";
import { Card, Col, Row, Tag } from "antd";

const CardTicket = () => {
    return (
        <Row gutter={16}>
            <Col span={6}>
                <Card >
                    <div className="grid justify-items-center gap-2">
                        <span>
                            <StarOutlined />
                            <MailOutlined style={{ fontSize: 30 }} />
                        </span>
                        <p>تیکت های باز</p>
                        <Tag color="#f6d4b6" className="px-3 py-1">1</Tag>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="grid justify-items-center gap-2">
                        <ContainerOutlined style={{ fontSize: 30 }} />
                        <p>در حال بررسی</p>
                        <Tag color="#f6d4b6" className="px-3 py-1">1</Tag>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="grid justify-items-center gap-2">
                        <span>
                            <MailOutlined style={{ fontSize: 30 }} />
                            <AlignLeftOutlined />
                        </span>
                        <p>پاسخ داده شده</p>
                        <Tag color="#f6d4b6" className="px-3 py-1">0</Tag>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="grid justify-items-center gap-2">
                        <MailOutlined style={{ fontSize: 30 }} />
                        <p>بسته شده</p>
                        <Tag color="#f6d4b6" className="px-3 py-1">5</Tag>
                    </div>
                </Card>
            </Col>
        </Row>

    );
};

export default CardTicket;