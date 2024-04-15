import { useTranslation } from "react-i18next";
import { Form, Row, Col, Card, Avatar } from "antd";
import { AppstoreOutlined, EnvironmentOutlined } from "@ant-design/icons";

import Regex from "@/utils/regex";

import { Inputs, Buttons } from "@/components";

const { Meta } = Card;
const Personal = () => {
	const { t } = useTranslation();


	return (
		<Card cover={<img src={"/assets/icon/pic2.svg"} className="h-32 md:h-56 object-cover" />} bordered>
			<Meta
				avatar={[
					<Avatar
						key={"profile-img"}
						src={"/assets/icon/avatar1.png"}
						className="-mt-16 size-20 md:-mt-32 md:size-44"
						alt="profile-img"
					/>,
				]}
			/>
			<section className="personal-form mt-5 text-xs md:text-sm">
				<Row gutter={[8, 8]} className="p-5 md:p-10 lg:px-20 lg:py-10">
					<Col xs={24} md={4}>
						<Inputs name="firstname" label="نام" placeholder={t("سامان حشمتی")} extraClasses="flex-grow" />
					</Col>
					<Col xs={24} md={6}>
						<Inputs name="lastname" label="نام خانوادگی" placeholder={t("سامان حشمتی")} extraClasses="flex-grow" />
					</Col>
					<Col xs={24} md={8}>
						<Inputs
							name="brithYear"
							label="سال تولد"
							placeholder={t("1368")}
							extraClasses="flex-grow"
						/>
					</Col>
					<Col xs={24} md={12}>
						<Inputs
							name="email"
							label="ایمیل"
							placeholder={t("samanHeshmati@gmail.com")}
							extraClasses="flex-grow"
						/>
					</Col>
					<Col xs={24} md={12}>
						<Inputs
							name="phone"
							label="شماره تماس"
							pattern={Regex.mobileNumber}
							patternMessage={"صحیح نیست"}
							maxLength={11}
							placeholder={t("09121558087")}
							extraClasses="flex-grow"
						/>
					</Col>
					<Col xs={24} md={18}>
						<Inputs
							name="homeAddress"
							label="محل سکونت"
							placeholder={t("آدرس")}
							extraClasses="flex-grow"
						/>
					</Col>
					<Col xs={24} md={24}>
						<Buttons content={t("بروزرسانی")} type="primary" htmlType="submit" block={true} />
					</Col>
				</Row>
			</section>
		</Card>
	);
};

export default Personal;
