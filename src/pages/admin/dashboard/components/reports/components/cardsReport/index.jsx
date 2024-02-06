import { PercentageOutlined, WalletOutlined, CommentOutlined } from "@ant-design/icons";
import { Card, Col, Row, Tag, Tooltip } from "antd";

const CardsReport = () => {
    return (
        <Row gutter={18} justify={"center"}>
        <Col span={8}>
            <Card >
                <div className="grid justify-items-center gap-2">
                    <PercentageOutlined style={ {fontSize:30} } />
                    <p>کد تخفیف 15 درصدی شما</p>
                    <Tooltip title="کد کپی شد" >
                    <Tag color="#f6d4b6" className="px-3 py-1">#Bia2#Band</Tag>

                    </Tooltip>
                </div>
            </Card>
        </Col>
        <Col span={8}>
            <Card>
                <div className="grid justify-items-center gap-2">
                    <WalletOutlined style={ {fontSize:30}} />
                    <p>موجودی کیف پول شما</p>
                    <Tag color="#f6d4b6" className="px-3 py-1">150,000 تومان</Tag>
                </div>
            </Card>
        </Col>
        <Col span={8}>
            <Card>
                <div className="grid justify-items-center gap-2">
                    <CommentOutlined style={ {fontSize:30} }/>
                    <p>پیام های خوانده نشده</p>
                    <Tag color="#f6d4b6" className="px-3 py-1">5 عدد</Tag>
                </div>
            </Card>
        </Col>
    </Row>
    );
};

export default CardsReport;