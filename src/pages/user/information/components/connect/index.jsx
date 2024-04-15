import { Form, Row, Col, Card } from "antd";
import { Inputs, Buttons } from "@/components";
import { useTranslation } from "react-i18next";
import { TwitterOutlined, FacebookOutlined, InstagramFilled, PlusCircleOutlined } from "@ant-design/icons";

const Connect = () => {
	const { t } = useTranslation();
	return (
		<Card bordered>
			<Row gutter={[48, 18]} className="p-5 md:p-10 lg:px-20 lg:py-10">
				<Col xs={24} md={24} className="text-2xl pb-5">
					ارتباط با من
				</Col>
				<Col xs={24} md={12}>
					<Inputs
						name="twitterLink"
						placeholder="https://www.twitter.com/sabach"
						addonAfter={<TwitterOutlined className="text-2xl" />}
					/>
				</Col>
				<Col xs={24} md={12}>
					<Inputs
						name="facebookLink"
						placeholder={t("https://www.facebook.com/sabach")}
						addonAfter={<FacebookOutlined className="text-2xl" />}
					/>
				</Col>
				<Col xs={24} md={12}>
					<Inputs
						name="instagramLinkOne"
						placeholder={t("https://www.instagram.com/sabach")}
						addonAfter={<InstagramFilled className="text-2xl" />}
					/>
				</Col>
				<Col xs={24} md={12}>
					<Inputs
						name="instagramLinkTwo"
						placeholder={t("https://www.instagram.com/sabach")}
						addonAfter={<InstagramFilled className="text-2xl" />}
					/>
				</Col>
				<Col xs={24} md={24} className="flex justify-center">
					<Buttons
						content={
							<div className="flex justify-center items-center align-middle gap-3">
								<PlusCircleOutlined className="pb-1" />
								<span>{t("ذخیره")}</span>
							</div>
						}
						type="default"
						htmlType="button"
					/>
				</Col>
				
			</Row>
		</Card>
	);
};

export default Connect;
