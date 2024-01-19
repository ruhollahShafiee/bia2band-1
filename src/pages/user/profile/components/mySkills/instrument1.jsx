import { Col, Form, Row } from "antd";
import img from "../test.jpg";

const Instrument1 = () => {
    return (
        <section id="instrument-grid" className="mx-auto p-2 mt-0">
            <Form name="instrument-form" className="instrument-form mt-5 fs-sx" layout="vertical">
                <Row gutter={[8, 8]} align={"middle"} className="pb-5">
                    <Col xs={24} md={16} lg={12}>
                        <h3 className="pb-2">کارگاه های آموزشی و مستر کلاس هایی که شرکت کردم:</h3>
                        <p>- کارگاه تئوری موسیقی ارشد طهماسبی</p>
                        <p>-کارگاه تئوری موسیقی طهماسبی</p>
                    </Col>
                    <Col xs={24} md={16} lg={12}>
                        <div className="flex justify-center gap-5">
                            <img src={img} height={120} width={150} className="rounded pt-3" />
                            <video controls poster={img} height={120} width={150} className="rounded">
                                <source src={img} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} align={"middle"} className="pb-5">
                    <Col xs={24} md={16} lg={12}>
                        <h3 className="pb-2">سابقه ی تدریس در آموزشگاه های:</h3>
                        <p>- فجر</p>
                        <p>- گندم</p>
                        <p>- گندم</p>
                        <p>- گندم</p>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <div className="flex justify-center gap-5">
                            <img src={img} height={120} width={150} className="rounded pt-3" />
                            <video controls poster={img} height={120} width={150} className="rounded">
                                <source src={img} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} align={"middle"} className="pb-5">
                    <Col xs={24} md={16} lg={12}>
                        <h3 className="pb-2">سابقه ی اجرا روی صحنه:</h3>
                        <p>- ارسباران</p>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <div className="flex justify-center gap-5">
                            <img src={img} height={120} width={150} className="rounded pt-3" />
                            <video controls poster={img} height={120} width={150} className="rounded">
                                <source src={img} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} align={"middle"} className="pb-5">
                    <Col xs={24} md={16} lg={12}>
                        <h3 className="pb-2">سابقه ی همکاری با رسانه ی ملی:</h3>
                        <p>- شبکه 5</p>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <div className="flex justify-center gap-5">
                            <img src={img} height={120} width={150} className="rounded pt-3" />
                            <video controls poster={img} height={120} width={150} className="rounded">
                                <source src={img} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} align={"middle"} className="pb-5">
                    <Col xs={24} md={16} lg={12}>
                        <h3 className="pb-2">سابقه ی حضور در آلبوم های موسیقی:</h3>
                        <p>- خواب های طلایی</p>
                        <p>- خواب های طلایی 2</p>
                    </Col>
                    <Col xs={24} md={16} lg={12}>
                        <div className="flex justify-center gap-5">
                            <img src={img} height={120} width={150} className="rounded pt-3" />
                            <video controls poster={img} height={120} width={150} className="rounded">
                                <source src={img} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
            </Form>
        </section>
    );
};

export default Instrument1;