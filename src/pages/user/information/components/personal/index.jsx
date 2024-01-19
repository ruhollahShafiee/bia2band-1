import { useTranslation } from "react-i18next";
import { Form, Row, Col, Card, Avatar } from "antd";
import Meta from "antd/es/card/Meta";
import { AppstoreOutlined, EnvironmentOutlined} from "@ant-design/icons";
import Regex from "@/utils/regex";
import { Selects, Inputs } from "@/components";
import img from "../test.jpg";

const title = "مشخصات شخصی من";

const Personal = () => {
	const { t } = useTranslation();
	return (
		<>
			<Card cover={<img src={img} className="h-36" />} bordered>
				<Meta
					avatar={<Avatar src={img} className="-mt-16 size-24 mb-5" />} />
				{title}
				<Form name="personal-form" className="personal-form mt-5" layout="vertical">
					<Row gutter={[8, 8]} align={"middle"}>
						<Col xs={24} md={16} lg={12}>
							<Inputs 
							name="name" 
							label="نام" 
							placeholder={t("سامان حشمتی")} 
							extraClasses="flex-grow"
							/>
						</Col>
						<Col xs={24} md={16} lg={12}>
							<Inputs 
							name="email" 
							label="ایمیل" 
							placeholder={t("samanHeshmati@gmail.com")} 
							extraClasses="flex-grow"
							/>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"}>
						<Col xs={24} md={16} lg={12}>
							<Selects
								name="birthdate"
								label="سال تولد"
								placeholder={
									<div className="flex gap-2 align-middle items-center">
										<AppstoreOutlined className="pb-1" />
										<span>1369</span>
									</div>
								}
							/>
						</Col>
						<Col xs={24} md={16} lg={12}>
							<Inputs
								name="mobile"
								label="شماره تماس"
								pattern={Regex.mobileNumber}
								patternMessage={"صحیح نیست"}
								maxLength={11}
								placeholder={t("09121558087")}
								extraClasses="flex-grow"
							/>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"}>
						<Col xs={24} md={16} lg={12}>
							<Selects
								name="city"
								label="محل سکونت"
								placeholder={
									<div className="flex gap-2 align-middle items-center">
										<EnvironmentOutlined className="pb-1" />
										<span>نام شهر</span>
									</div>
								}
							/>
						</Col>
					</Row>
				</Form>
			</Card>
		</>
	);
};

export default Personal;
