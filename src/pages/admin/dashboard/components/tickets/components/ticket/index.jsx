import { Card, Typography } from "antd";
import { Buttons } from "@/components";
import { useTranslation } from "react-i18next";
import NewTicket from "./newTicket";

const { Title } = Typography;
const { Meta } = Card;

const title = "تیکت های پشتیبانی";
const description = "توضیحات اضافه ";

const Ticket = () => {
    const { t } = useTranslation();
    return (
        <Card
            bordered >
            <Meta
                title={
                    <Title level={5} className="mb-3">
                        {title}
                    </Title>
                }
                description={
                    <p className="text-justify text-slate-400">
                        {description + description + description + description}
                    </p>
                }
            />
            <Buttons content={t("تیکت جدید")}
                classes="float-end"
                type="primary"
                htmlType="button"
            />
        </Card>

    );
};

export default Ticket;


