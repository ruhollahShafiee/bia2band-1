import { useTranslation } from "react-i18next";
import { Col, Form, Row, Typography } from "antd";

import { Buttons, Inputs, InputType } from "@/components";

import banner from "/assets/icon/pic2.svg";

const { Title } = Typography;

const title = "تماس با ما";

const ContactPage = () => {
	// hooks
	const { t } = useTranslation();
	const [form] = Form.useForm();
	// handles
	const onSubmit = (formValues) => {};
	// return
	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<section id="join-grid" className="mx-auto p-5 mt-8">
				<div className="grid gap-4 grid-cols-2">
					<div className="col-span-1" dir="ltr">
						<img src={banner} alt="contact-us-img" className="object-cover rounded-lg" loading="lazy" />
					</div>
					<div className="col-span-1">
						<Form
							name={"contact-us"}
							form={form}
							layout="vertical"
							onFinish={onSubmit}
							className="flex flex-col justify-between h-full"
						>
							<Row gutter={[8, 8]}>
								<Title level={2} className="pb-4 w-full">
									{title}
								</Title>
								<Col md={12}>
									<Inputs name="email" label={t("ایمیل")} required classes="grow ltr" />
								</Col>
								<Col md={12}>
									<Inputs name="mobile" label={t("شماره همراه")} required classes="grow ltr" />
								</Col>
								<Col md={12}>
									<Inputs name="title" label={t("عنوان")} required />
								</Col>
								<Col span={24}>
									<InputType name="description" label={t("متن پیام")} required type="textarea" />
								</Col>
								<Col span={24} className="flex justify-end">
									<Buttons content={<span className="px-8">ارسال</span>} htmlType="submit" />
								</Col>
							</Row>
						</Form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
