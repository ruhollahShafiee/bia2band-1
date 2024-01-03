import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import TextArea from "antd/es/input/TextArea";
import { useTranslation } from "react-i18next";
import { Form } from "react-router-dom";
import { Buttons } from "../../../../../components";

const title="توضیحات دلخواه";

const Description = () => {
    const { t } = useTranslation();
    return(
        <>
        <Card
        bordered
        >
            <Meta
            title={title}
            />
            <Form name="about-form" className="about-form mt-5" layout="vertical">
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={24} lg={24}>
                            <TextArea
                                name="about"
                                autoSize={10}
                                placeholder={t("اگر توضیحات خاصی مدنظرتان هست در این قسمت بنویسید.")}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} justify={"end"} align={"middle"}>
                        <Col xs={20} md={8} lg={10}>
                            <Buttons content={t("می خواهم گروه تشکیل دهم و سرپرست گروه باشم")}  type="default"
                                size="small" htmlType="button" block={true}
                            />
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <Buttons content={t("اضافه کردن ساز")} type="primary"
                                size="small" htmlType="button" block={true}
                            />
                        </Col>
                    </Row>
                </Form>

        </Card>
        </>
    )
}

export default Description;