import { Card, Form, Row, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { Buttons } from "@/components";
import { useTranslation } from "react-i18next";
import TextArea from "antd/es/input/TextArea";

const title = "درباره من";

const About = () => {
	const { t } = useTranslation();
	return (
		<>
			<Card bordered>
				<Meta title={title} />
				<Form name="about-form" className="about-form mt-5" layout="vertical">
					<Row gutter={[8, 8]} align={"middle"}>
						<Col xs={24} md={24} lg={24}>
							<TextArea
								name="about"
								autoSize={{
									minRows: 5,
									maxRows: 8,
								}}
								placeholder={t("ویژگی های شخصیتی و حرفه ای خود را در این قسمت بنویسید.")}
							/>
						</Col>
					</Row>
					<Row gutter={[8, 8]} justify={"end"} align={"middle"} className="mt-2">
						<Col xs={20} md={8} lg={4}>
							<Buttons content={t("انصراف")} type="default" htmlType="button" block={true} />
						</Col>
						<Col xs={20} md={8} lg={4}>
							<Buttons content={t("ذخیره")} type="primary" htmlType="button" block={true} />
						</Col>
					</Row>
				</Form>
			</Card>
		</>
	);
};

export default About;
