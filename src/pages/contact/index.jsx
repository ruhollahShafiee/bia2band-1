import { useTranslation } from "react-i18next";
import { Form, Typography } from "antd";

import { Buttons, Inputs, InputType } from "@/components";

import img from "/assets/image/test.jpg";

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
						<img src={img} alt="contact-us-img" className="object-cover rounded-lg" loading="lazy" />
					</div>
					<div className="col-span-1">
						<Form
							name={"contact-us"}
							form={form}
							layout="vertical"
							onFinish={onSubmit}
							className="flex flex-col justify-between h-full"
						>
							<div className="flex flex-col">
								<Title level={2} className="pb-4">
									{title}
								</Title>
								<Inputs name="email" label={t("ایمیل")} required classes="w-2/3"/>
								<Inputs name="mobile" label={t("شماره همراه")} required classes="w-2/3"/>
								<Inputs name="title" label={t("عنوان")} required classes="w-2/3"/>
								<InputType name="description" label={t("متن")} required type="textarea" />
							</div>
							<div className="flex gap-3 justify-end">
								<Buttons content={<span className="px-8">ارسال</span>} htmlType="submit" />
							</div>
						</Form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
