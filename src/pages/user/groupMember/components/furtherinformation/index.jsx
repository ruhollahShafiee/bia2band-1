import { Card, Checkbox, Col, Form, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { Buttons, Inputs } from "../../../../../components";
import { useTranslation } from "react-i18next";
import TextArea from "antd/es/input/TextArea";

const title="اطلاعات تکمیلی";

const FurtherInformation = () => {
    const { t } = useTranslation();
    return (
        <>
        <Card 
        bordered
        >
        <Meta
        title={title}
        />
        <Form name="further-form" className="further-form mt-5 fs-sx" layout="vertical">
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <label>سابقه ی اجرای صحنه ای داشته اید؟</label>

                        </Col>
                        </Row>
                        <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={22} md={10} lg={8}>
                            <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <Inputs
                                name="add"
                                placeholder={t("ارسباران")}
                            />
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <label> + افزودن</label>
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <Buttons content={t("آپلود تصویر یا فایل ضمیمه")} type="dashed"
                                size="small" htmlType="link"
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <label>سابقه ی ضبط استودیویی داشته اید؟</label>

                        </Col>
                        </Row>
                        <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={22} md={10} lg={8}>
                            <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <Inputs
                                name="add"
                                placeholder={t("ارسباران")}
                            />
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <label> + افزودن</label>
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <Buttons content={t("آپلود تصویر یا فایل ضمیمه")} type="dashed"
                                size="small" htmlType="link"
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <label>سابقه ی حضور در آلبوم موسیقی داشته اید؟</label>

                        </Col>
                        </Row>
                        <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={22} md={10} lg={8}>
                            <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <Inputs
                                name="add"
                                placeholder={t("ارسباران")}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <label>سابقه ی حضور در جشنواره موسیقی داشته اید؟</label>

                        </Col>
                        </Row>
                        <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={22} md={10} lg={8}>
                            <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <Inputs
                                name="add"
                                placeholder={t("ارسباران")}
                            />
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <label> + افزودن</label>
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <Buttons content={t("آپلود تصویر یا فایل ضمیمه")} type="dashed"
                                size="small" htmlType="link"
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <label>سابقه ی همکاری با رسانه ی ملی داشته اید؟</label>

                        </Col>
                        </Row>
                        <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={22} md={10} lg={8}>
                            <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <Inputs
                                name="add"
                                placeholder={t("ارسباران")}
                            />
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <label> + افزودن</label>
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <Buttons content={t("آپلود تصویر یا فایل ضمیمه")} type="dashed"
                                size="small" htmlType="link"
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <label>توضیحات دلخواه</label>

                        </Col>
                        </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={24} lg={24}>
                            <TextArea
                                name="about"
                                autoSize={10}
                                placeholder={t("اگر توضیحات خاصی مدنظرتان هست در این قسمت بنویسید.")}
                            />
                        </Col>
                    </Row>
                        </Form>
                        </Card>
        </>

    )
}
 export default FurtherInformation;