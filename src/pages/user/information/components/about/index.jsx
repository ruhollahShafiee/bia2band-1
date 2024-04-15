import { Card, Form, Row, Col } from "antd";
import { Buttons, InputType, Inputs } from "@/components";
import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();
	return (
		<Card bordered>

			<Row gutter={[8, 16]} justify={"end"} className="p-5 md:p-10 lg:px-20 lg:py-10">
				<Col xs={24} md={24} className="text-2xl pb-5">
					درباره من
				</Col>
				<Col xs={24} md={24}>
					<Inputs
						name="id"
						type="hidden"
					/>
					<InputType
						name="aboutMe"
						type="textarea"
						classes="text-xs md:text-sm"
						autoSize={{
							minRows: 5,
						}}
						placeholder={t("ویژگی های شخصیتی و حرفه ای خود را در این قسمت بنویسید .")}
					/>
				</Col>
				{/* <Col xs={12} md={4}>
						<Buttons content={t("انصراف")} type="default" htmlType="reset" block={true} />
					</Col> */}
				<Col xs={12} md={4}>
					<Buttons content={t("ذخیره")} type="primary" htmlType="submit" block={true} />
				</Col>
			</Row>

		</Card>
	);
};

export default About;
