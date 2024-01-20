import { Card, Form, Row, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { useTranslation } from "react-i18next";
import { Selects, Buttons, Inputs } from "@/components";
import img from "../test.jpg";

const title = "اطلاعات تخصصی من";

const MyProfesional = () => {
    const { t } = useTranslation();
    return (
        <>
            <Card
                bordered
            >
                <Meta
                    title={title}
                />
                <Form name="profesional-form" className="profesional-form mt-5 fs-sx" layout="vertical">
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <Selects
                                name="expertise"
                                label="حوزه تخصصی من"
                                placeholder={t("انتخاب کنید")}
                                options={[
                                    { name: 'ترانه سرا', id: '1' },
                                    { name: 'خواننده', id: '2' },
                                    { name: 'نوازنده', id: '3' },
                                    { name: 'سرپرست گروه', id: '4' },
                                    { name: 'صاحب کسب و کار', id: '5' },

                                ]}

                            />
                        </Col>
                        <Col xs={24} md={16} lg={12}>
                            <Selects
                                name="instrument"
                                label="ساز تخصصی 1"
                                placeholder={t("انتخاب کنید")}
                                options={[
                                    { name: 'سنتور', id: '1' },
                                    { name: 'دف', id: '2' },
                                    { name: 'درام', id: '3' },
                                    { name: 'گیتار', id: '4' },

                                ]}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} justify={"end"} align={"middle"} >
                        <Col xs={24} md={16} lg={12}>
                            <Inputs name="duration" label="مدت زمان" placeholder={t("سه سال")} />
                        </Col>
                    </Row>
                    <div className="flex justify-around">
						<div className="flex gap-5 flex-col justify-center align-middle items-center">
							<video controls poster={img}  height={200} width={300} className="rounded-lg object-fill">
								<source src={img} height={200} width={300} type="video/mp4" />
							</video>
							<Buttons content={t("+ افزودن ویدئو گروه")} type="default" htmlType="button" />
						</div>

						<div className="flex gap-5 flex-col justify-center align-middle items-center">
							<img src={img} height={200} width={300} className="rounded-lg" />
							<Buttons content={t("+ افزودن تصویر")} type="default" htmlType="button" />
						</div>
					</div>
                </Form>
            </Card>
        </>
    )
}

export default MyProfesional;