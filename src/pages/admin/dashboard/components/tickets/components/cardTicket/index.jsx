import { AlignLeftOutlined, ContainerOutlined, MailOutlined, StarOutlined } from "@ant-design/icons";
import { Card, Col, Row, Tag } from "antd";

const CardTicket = () => {
    return (
        <Row gutter={6} md:gutter={16} className="text-xs md:text-sm">
            <Col span={6}>
                <Card >
                    <div className="grid justify-items-center md:gap-2 text-xs md:text-sm">
                        <span>
                            <StarOutlined />
                            <MailOutlined style={{ fontSize: 30 }} />
                        </span>
                        <p className="text-xs md:text-sm">تیکت های باز</p>
                        <Tag color="#f6d4b6" className="md:px-3 md:py-1 text-xs md:text-sm">1</Tag>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="grid justify-items-center md:gap-2 text-xs md:text-sm">
                        <ContainerOutlined style={{ fontSize: 30 }} />
                        <p className="text-xs md:text-sm">در حال بررسی</p>
                        <Tag color="#f6d4b6" className="md:px-3 md:py-1.5 text-xs md:text-sm">1</Tag>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="grid justify-items-center md:gap-2 text-xs md:text-sm">
                        <span>
                            <MailOutlined style={{ fontSize: 30 }} />
                            <AlignLeftOutlined />
                        </span>
                        <p className="text-xs md:text-sm">پاسخ داده شده</p>
                        <Tag color="#f6d4b6" className="md:px-3 md:py-1 text-xs md:text-sm">0</Tag>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="grid justify-items-center md:gap-2 text-xs md:text-sm">
                        <MailOutlined style={{ fontSize: 30 }} />
                        <p className="text-xs md:text-sm">بسته شده</p>
                        <Tag color="#f6d4b6" className="md:px-3 md:py-1.5 text-xs md:text-sm">5</Tag>
                    </div>
                </Card>
            </Col>
        </Row>

    );
};

export default CardTicket;