import { useTranslation } from "react-i18next";
import { Card, Form, Row, Col } from "antd";

import { Selects, Buttons, Inputs } from "@/components";

const MyProfessional = () => {
	const { t } = useTranslation();
	return (
		<Card>
			<Form name="pro-form" className="pro-form" layout="vertical">
				<Row gutter={[8, 8]} className="p-5 md:p-10 lg:px-20 lg:py-10">
					<Col xs={24} md={24} className="text-2xl pb-5">
						ارتباط با من
					</Col>
					<Col xs={24} md={8}>
						<Selects
							name="expertise"
							label="حوزه تخصصی من"
							placeholder={t("انتخاب کنید")}
							options={[
								{ name: "ترانه سرا", id: "1" },
								{ name: "خواننده", id: "2" },
								{ name: "نوازنده", id: "3" },
								{ name: "سرپرست گروه", id: "4" },
								{ name: "صاحب کسب و کار", id: "5" },
							]}
						/>
					</Col>
					<Col xs={24} md={8}>
						<Selects
							name="instrument"
							label="ساز تخصصی 1"
							placeholder={t("انتخاب کنید")}
							options={[
								{ name: "سنتور", id: "1" },
								{ name: "دف", id: "2" },
								{ name: "درام", id: "3" },
								{ name: "گیتار", id: "4" },
							]}
						/>
					</Col>
					<Col xs={24} md={8}>
						<Inputs name="duration" label="مدت زمان" placeholder={t("سه سال")} />
					</Col>
				</Row>
				<div className="flex flex-col md:flex-row justify-around">
					<div className="flex gap-5 flex-col justify-center align-middle items-center">
						<video
							controls
							poster={"/assets/image/test.jpg"}
							height={200}
							width={300}
							className="rounded-lg object-fill"
						>
							<source src={"/assets/image/test.jpg"} height={200} width={300} type="video/mp4" />
						</video>
						<Buttons content={t("+ افزودن ویدئو گروه")} type="default" htmlType="button" />
					</div>
					<div className="flex gap-5 flex-col justify-center align-middle items-center">
						<img src={"/assets/image/test.jpg"} height={200} width={300} className="rounded-lg" />
						<Buttons content={t("+ افزودن تصویر")} type="default" htmlType="button" />
					</div>
				</div>
			</Form>
		</Card>
	);
};

export default MyProfessional;
