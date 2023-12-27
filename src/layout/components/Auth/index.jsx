import { useTranslation } from "react-i18next";
import { Form } from "antd";

import logo from "/assets/icon/vite.svg";

import { Buttons, Inputs } from "@/components";

const Auth = () => {
	const { t } = useTranslation();
	const [form] = Form.useForm();
	// handles
	const onSubmit = (formValues) => {};
	// return
	return (
		<div className="flex flex-col items-center py-5">
			<div className="flex items-center">
				<img src={logo} alt="guaranty-u-img" className="rounded-full" height={50} loading="lazy" />
				<strong className="text-xl">بیا توبند</strong>
			</div>
			<p className="text-2xl">ورود یا ثبت نام</p>
			<p className="-mt-3 text-slate-400">لطفا شماره موبایل یا ایمیل خود را وارد نمایید</p>
			<Form
				form={form}
				name="search-form"
				className="search-form w-full text-center pt-3"
				layout="vertical"
				onFinish={onSubmit}
			>
				<Inputs required={true} name="names" placeholder={t("شماره موبایل یا ایمیل ...")} classes="w-1/2 py-3" />
				<Buttons
					content={<span className="px-10">{t("ورود")}</span>}
					htmlType="submit"
					type="dashed"
					size="large"
					classes="mt-2"
				/>
			</Form>
			<p>
				با ورود به بیا تو بند , <strong className="text-blue-600">شرایط و قوانین حریم خصوصی</strong> را می پذیرم
			</p>
		</div>
	);
};

export default Auth;
