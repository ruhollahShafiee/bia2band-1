import { useTranslation } from "react-i18next";
import { Form } from "antd";

import { Buttons, Inputs } from "@/components";
import TextArea from "antd/es/input/TextArea";
import { Selects } from "@/components";

const Auth = () => {
	const { t } = useTranslation();
	const [form] = Form.useForm();
	// handles
	const onSubmit = (formValues) => { };
	// return
	return (
		<div className="flex flex-col py-5">
			<div className="flex items-start">
				<p className="text-slate-500"> بیا تو بند/ ارسال تیکت جدید </p>
			</div>
			<Form
				form={form}
				name="sendTicket-form"
				className="sendTicket-form  self-center pt-3 w-2/3"
				layout="vertical"
				onFinish={onSubmit}
			>
				<Inputs
					name="subject"
					label="موضوع"
					placeholder={t("گروه ارسباران")}
				/>
				<Selects
					name="unit"
					label="واحد مربوطه"
					placeholder={t("انتخاب کنید")}
					options={[
						{ name: 'فنی', id: '1' },
						{ name: 'امور مالی', id: '2' },
					]}
				/>
				<label className="flex mb-1">توضیحات</label>
				<TextArea
					name="description"
					autoSize={{
						minRows: 5,
						maxRows: 8,
					}}
					placeholder={t("مشکل در این قسمت شرح داده می شود. مشکل در این قسمت شرح داده می شود.")}
				/>
				<Buttons
					content={<span className="px-10">{t("ارسال")}</span>}
					htmlType="submit"
					type="default"
					size="large"
					classes="mt-2 mr-14"
				/>
			</Form>
		</div>
	);
};

export default Auth;
