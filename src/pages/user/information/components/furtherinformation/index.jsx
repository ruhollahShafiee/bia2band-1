import { Card, Form, Row, Col, Checkbox } from "antd";
import { useTranslation } from "react-i18next";
import { EnvironmentOutlined, PhoneOutlined, TeamOutlined, BuildOutlined, CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Inputs, Selects, Buttons, InputType } from "@/components";

const SingleQuestion = ({ title = "", names = [] }) => (
    <Row gutter={[8, 8]}>
        <Col xs={24} md={24} className="text-xs">
            <h3 className="mb-2">{title}</h3>
        </Col>
        {names.map((item) => (
            <Col xs={24} md={3} className="flex flex-col">
                <Checkbox.Group style={{ width: '100%' }} >
                    <Checkbox key={item}>{item}</Checkbox>
                </Checkbox.Group>
            </Col>
        ))}
    </Row>
);

const FurtherInformation = () => {
    const { t } = useTranslation();
    const furthers = [
        {
            key: "question-1",
            title: "کدامیک از سازهای زیر را موجود دارد؟",
            names: ["هیچ سازی ندارد", "درامز", "دف", "پرکاشن", "ویلن", "سنتور", "کنترباس", "سایر سازها"],
        },
        {
            key: "question-2",
            title: "سایر ویژگی ها را مشخص کنید.",
            names: ["آینه", "تخته وایت برد", "صندلی", "نمایشگر", "پایه نت", "ویدئو پروژکتور", "سیستم تهویه", "سایر سازها"],
        },
    ];
    return (
        <Card bordered>
            <Form name="personal-form" className="personal-form mt-5 text-xs md:text-sm" layout="vertical">
                <Row gutter={[8, 8]} justify={"end"} className="p-5 md:p-10 lg:px-20 lg:py-10">
                    <Col xs={24} md={24} className="text-2xl pb-5">
                        اطلاعات تکمیلی من
                    </Col>
                    <Col xs={24} md={12}>
                        <Selects
                            name="address"
                            label="آدرس"
                            placeholder={
                                <div className="flex gap-2 align-middle items-center">
                                    <EnvironmentOutlined className="pb-1" />
                                    <span>آدرس محل کار</span>
                                </div>
                            }
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Inputs
                            name="phone"
                            label="شماره محل کار"
                            prefix={<PhoneOutlined
                                style={{
                                    color: 'rgba(0,0,0,.35)',
                                }}
                            />}
                            placeholder={t("02188887547")}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Inputs
                            name="capacity"
                            label="گنجایش"
                            prefix={<TeamOutlined
                                style={{
                                    color: 'rgba(0,0,0,.35)',
                                }}
                            />}
                            placeholder={t("50")}
                            addonAfter={"نفر"}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Inputs
                            name="meterage"
                            label="متراژ"
                            prefix={<BuildOutlined
                                style={{
                                    color: 'rgba(0,0,0,.35)',
                                }}
                            />}
                            placeholder={t("200")}
                            addonAfter={"مترمربع"}
                        />
                    </Col>
                    <Col xs={24} md={24}>
                        امکان ضبط کلیپ ویدئویی دارد؟
                    </Col>
                    <Col xs={24} md={12}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Checkbox value="A" disabled>ندارد</Checkbox>
                                <Checkbox value="B">دارد</Checkbox>
                        </Checkbox.Group>
                    </Col>
                    <Col xs={24} md={12}>
                        <Inputs
                            name="save"
                            placeholder={t("ارسباران")}
                        />
                    </Col>
                    <Col xs={24} md={24}>
                    امکان ضبط صوتی دارد؟
                    </Col>
                    <Col xs={24} md={12}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Checkbox value="A" defaultChecked>ندارد</Checkbox>
                                <Checkbox value="B" disabled>دارد</Checkbox>
                        </Checkbox.Group>
                    </Col>
                    <Col xs={24} md={12}>
                        <Inputs
                            name="save"
                            placeholder={t("ارسباران")}
                        />
                    </Col>
                    {furthers.map(({ key, title, names }) => (
                        <SingleQuestion key={key} title={title} names={names} t={t} />
                    ))}
                    <Col xs={24} md={24} className="mt-5">
                        لطفا روزهای کاری را مشخص کنید.
                    </Col>
                    <Col xs={8} md={8}>
                        روزهای هفته
                    </Col>
                    <Col xs={8} md={8}>
                        از ساعت
                    </Col>
                    <Col xs={8} md={8}>
                        تا
                    </Col>
                    <Col xs={8} md={8}>
                        <Inputs
                            name="week"
                            placeholder="شنبه"
                            prefix={<CalendarOutlined
                                style={{
                                    color: 'rgba(0,0,0,.35)',
                                }}
                            />}
                        />
                    </Col>
                    <Col xs={8} md={8}>
                        <Inputs
                            name="time1"
                            placeholder="11"
                            prefix={<ClockCircleOutlined
                                style={{
                                    color: 'rgba(0,0,0,.35)',
                                }}
                            />}
                        />
                    </Col>
                    <Col xs={8} md={8}>
                        <Inputs
                            name="time2"
                            placeholder="22"
                            prefix={<ClockCircleOutlined
                                style={{
                                    color: 'rgba(0,0,0,.35)',
                                }}
                            />}
                            addonAfter={"افزودن"}
                        />
                    </Col>
                    <Col xs={24} md={24} className="mt-5">
                        امکان رزرو از طریق سایت بیاتوبند؟
                    </Col>
                    <Col xs={24} md={24}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"A"}>
                            <Checkbox value="A" defaultChecked>می خواهم</Checkbox>
                            <Checkbox value="B" disabled>نمی خواهم</Checkbox>
                        </Checkbox.Group>
                    </Col>
                    <Col xs={24} md={24} className="mt-5 mb-3 text-sm md:text-lg">
                    توضیحات دلخواه
                    </Col>
                    <Col xs={24} md={24}>
                        <InputType
                            type="textarea"
                            name="description"
                            classes="text-xs md:text-sm"
                            autoSize={{
                                minRows: 5,
                            }}
                            placeholder={t("اگر توضیحات خاصی مدنظرتون هست در این قسمت بنویسید.")}
                        />
                        <Col xs={24} md={24} className="flex justify-end">
                        <Buttons content={t("اضافه کردن مکان جدید")}
                            type="default"
                            htmlType="button"
                        />
                        </Col>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};
export default FurtherInformation;