import { useTranslation } from "react-i18next";
import { Card, Col, Form, Row } from "antd";
import { Buttons, InputType } from "@/components";
const Description = () => {
    const { t } = useTranslation();
    const responsive=""
	return (
		<Card bordered>
			<Form name="about-form" className="about-form" layout="vertical">
				<Row gutter={[8, 16]} justify={"end"} className="p-5 md:p-10 lg:px-20 lg:py-10">
					<Col xs={24} md={24} className="text-2xl pb-5">
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
					<Col xs={24} md={12}>
						<Buttons
							content={t("می خواهم گروه تشکیل دهم و سرپرست گروه باشم")}
							type="default"
							htmlType="reset"
							block={true}
						/>
					</Col>
					<Col xs={24} md={6}>
						<Buttons content={t("اضافه کردن ساز")} type="primary" htmlType="submit" block={true} />
					</Col>
				</Row>
			</Form>
		</Card>
	);
};

export default Description;
