import { useTranslation } from "react-i18next";
import { Card, Form, Row, Col } from "antd";
import { Selects, Buttons } from "@/components";

const Professional = () => {
	const { t } = useTranslation();
	return (
		<Card bordered>
			<Form name="prof-form" className="prof-form mt-5 text-xs md:text-sm" layout="vertical">
				<Row gutter={[8, 16]} className="p-5 md:p-10 lg:px-20 lg:py-10">
					<Col xs={24} md={24} className="text-2xl pb-5">
						اطلاعات تخصصی من
					</Col>
					<Col xs={24} md={12}>
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
					<Col xs={24} md={12}>
						<Selects
							name="place"
							label="مکان های اختصاصی"
							placeholder={t("انتخاب کنید")}
							options={[
								{ name: "پلاتو", id: "1" },
								{ name: "استودیو", id: "2" },
								{ name: "زیر منو", id: "3" },
								{ name: "زیر منو", id: "4" },
							]}
						/>
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

export default Professional;
