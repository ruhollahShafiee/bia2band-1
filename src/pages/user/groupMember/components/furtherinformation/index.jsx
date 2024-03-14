import { Card, Col, Form, Radio, Row } from "antd";
import { Inputs, InputType, Buttons } from "@/components";
import { useTranslation } from "react-i18next";
import { CloudUploadOutlined, PlusCircleOutlined } from "@ant-design/icons";

const SingleQuestion = ({ t, title = "", names = [], hasUpload = true }) => (
    <Row gutter={[8, 8]} justify={"start"}>
        <Col xs={24} md={24}>
            <h3 className="mb-2">{title}</h3>
        </Col>
        <Col xs={24} md={6}>
            <Radio.Group name="answer">
                <Radio value={"yes"}>دارم</Radio>
                <Radio value={"no"}>ندارم</Radio>
            </Radio.Group>
        </Col>
        <Col xs={24} md={12} className="flex flex-col">
            {names.map((item) => (
                <Inputs key={item} name={item} defaultValue={item} addonAfter={<PlusCircleOutlined />} />
            ))}
        </Col>
        <Col xs={24} md={6}>
            <Buttons
                disabled={!hasUpload}
                content={
                    <div className="flex gap-3">
                        <span className="pb-2"> {t("آپلود تصویر یا فایل ضمیمه")} </span>
                        <CloudUploadOutlined className="pb-3" />
                    </div>
                }
                type="dashed"
                htmlType="link"
            />
        </Col>
    </Row>
);

const FurtherInformation = () => {
    const { t } = useTranslation();
    const furthers = [
        {
            key: "question-1",
            title: "سابقه ی اجرای صحنه ای داشته اید؟",
            names: ["ارسباران"],
        },
        {
            key: "question-2",
            title: "سابقه ی ضبط استودیویی داشته اید؟",
            names: ["ارسباران"],
        }, {
            key: "question-3",
            title: "سابقه ی حضور در آلبوم موسیقی داشته اید؟",
            names: ["ارسباران"],
            hasUpload: false,
        }, {
            key: "question-4",
            title: "سابقه ی حضور در جشنواره موسیقی داشته اید؟",
            names: ["ارسباران"],
        }, {
            key: "question-5",
            title: "سابقه ی همکاری با رسانه ی ملی داشته اید؟",
            names: ["ارسباران"],
        },
    ];
    return (
        <Card
            bordered
        >
            <Form name="further-form" className="further-form mt-5 text-xs md:text-sm" layout="vertical">
                <Row className="p-2 md:p-10 lg:px-20 lg:py-10">
                    <Col xs={24} md={24} className="text-2xl pb-5">
                        اطلاعات تکمیلی
                    </Col>
                    {furthers.map(({ key, title, names, hasUpload }) => (
                        <SingleQuestion key={key} title={title} names={names} hasUpload={hasUpload} t={t} />
                    ))}
                </Row>
                <Row gutter={[8, 16]} className="p-5 md:p-10 lg:px-20 lg:py-6">
					<Col xs={24} md={24} className="text-xl pb-5">
                        توضیحات دلخواه
                    </Col>
                    <Col xs={24} md={24}>
                        <InputType
                            type="textarea"
                            classes="text-xs md:text-sm"
                            name="about"
                            autoSize={{
                                minRows: 5,
                            }}
                            placeholder={t("اگر توضیحات خاصی مدنظرتان هست در این قسمت بنویسید.")}
                        />
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};
export default FurtherInformation;