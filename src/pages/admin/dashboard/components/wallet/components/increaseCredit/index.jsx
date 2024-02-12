import { WalletOutlined } from "@ant-design/icons";
import { Col, Radio, Row } from "antd";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import Typography from "antd/es/typography/Typography";
import { Buttons, Inputs } from "@/components";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

const title = "افزایش اعتبار";

const IncreaseCredit = () => {
    const { t } = useTranslation();
    return (
        <Card bordered>
            <Meta
                title={
                    <Title level={5} className="mb-7">
                        <WalletOutlined />
                        {title}
                    </Title>
                }
            />
            <div className="flex flex-col mt-5">
                <Radio.Group defaultValue={2}>
                    <Radio value={1} disabled>30,000 تومان</Radio>
                    <Radio value={2}>50,000 تومان</Radio>
                    <Radio value={3} disabled>80,000 تومان</Radio>
                </Radio.Group>
            </div>
            <div className="flex mt-7 gap-3">
                <div className="pt-3">
                    <label>مبالغ دیگر:</label>
                </div>
                <Inputs
                    name="amounts"
                    placeholder="100,000"
                />
                <div className="pt-3">
                    <label>تومان</label>
                </div>
            </div>
            <div className="flex justify-center">
                <Buttons content={t("پرداخت")}
                    type="primary"
                    htmlType="button"
                />
            </div>
        </Card>
    );
};

export default IncreaseCredit;