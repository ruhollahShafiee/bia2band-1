import { Typography, Card, Row } from "antd";
import { Buttons } from "../../../../../components";
import { useTranslation } from "react-i18next";
import { BookOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Meta } = Card;

const title = "نوازنده گیتارباس";
const description = "استادیار/تخصص های دیگر...استادیار/تخصص های دیگر...استادیار/تخصص های دیگر...";

const SectionProfile = () => {
    const { t } = useTranslation();
    return (
        <section id="sectionprofile-grid" className="mx-auto p-4 pt-0">
            <div className="grid gap-4 grid-cols-2">
                <div className="col-span-1">
                    <div className="flex flex-col justify-between h-full">
                        <Meta
                            title={
                                <Title level={5} className="mb-3">
                                    {title}
                                </Title>
                            }
                            description={
                                <p className="text-justify text-slate-500">
                                    {description + description + description + description + description + description + description}
                                </p>
                            }
                        />
                    </div>
                </div>
            </div>
            <Row gutter={[8, 8]} className="justify-end gap-3">
                <Buttons
                    content={<span className="text-xs">ارسال درخواست هم گروه شدن</span>}
                    type="primary"
                    htmlType="button"
                    classes="float-end"
                />
                <Buttons
                    content={<span className="text-xs">ارسال پیام</span>}
                    type="default"
                    htmlType="button"
                    classes="float-end"
                />
                <BookOutlined style={{fontSize: "xx-large"}} className="pb-6"/>
            </Row>
        </section>
    );
};

export default SectionProfile;