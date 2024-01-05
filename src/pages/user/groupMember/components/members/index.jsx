import { Card, Form, Avatar, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import MemberCards from "./memberCards";
import img from "../../test.jpg";
import { Buttons, Inputs } from "../../../../../components";
import { useTranslation } from "react-i18next";

const title = "اعضای گروه";

const Members = () => {
    const { t } = useTranslation();
    const [images, setImages] = useState([{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }]);
    return (
        <>
            <Card cover={<img src={img} className="h-36" />} bordered>
                <Meta avatar={<Avatar src={img} className="-mt-16 size-24 mb-5" />} />
                {title}
                <Form name="member-form" className="member-form mt-5 fs-sx" layout="vertical">
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <div className="flex gap-3">
                                {images.map((imageItem) => {
                                    return <MemberCards id={imageItem.id} key={imageItem.key} />
                                })}
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <label>اطلاعات گروه</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="mt-4">
                        <Col xs={24} md={16} lg={12}>
                            <Inputs
                                name="name"
                                label="نام گروه"
                                placeholder={t("گروه ارسباران")}
                            />
                        </Col>
                        <Col xs={24} md={16} lg={12}>
                            <Inputs
                                name="duration"
                                label="مدت زمان تشکیل گروه"
                                placeholder="3 سال"
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} justify={"center"} align={"middle"} >
                        <Col xs={24} md={16} lg={8}>
                            <video controls poster={img} height={200} width={200} className="rounded-lg">
                                <source src={img} type="video/mp4" />
                            </video>
                        </Col>
                        <Col xs={24} md={16} lg={8}>
                            <img src={img} height={150} width={200} className="rounded-lg" />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} justify={"center"} align={"middle"} className="mt-5">
                        <Col xs={22} md={16} lg={8}>
                            <Buttons content={t("+ افزودن ویدئو گروه")} type="default"
                                size="small" htmlType="button"
                            />
                        </Col>
                        <Col xs={20} md={16} lg={8}>
                            <Buttons content={t("+ افزودن تصویر")} type="default"
                                size="small" htmlType="button"
                            />
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    )
}

export default Members;