import { useTranslation } from "react-i18next";
import { Form } from "antd";

import { setToCookie } from "@/utils/storage";
import { notificationMaker } from "@/utils/notification";

import { useAppContext } from "@/hooks";
import { Buttons, Inputs } from "@/components";

const Auth = () => {
	// hooks
	const { callApi } = useAppContext();
	const { t } = useTranslation();
	const [form] = Form.useForm();
	// handles
	const onSubmit = async (formValues) => {
		const { access_token, refresh_token } = await callApi({
			url: "auth/authenticate/v2",
			data: formValues,
			method: "POST",
		})
			.then((data) => data || {})
			.catch(() => {});
		// actions
		if (access_token) {
			setToCookie("access_token", access_token);
			setToCookie("refresh_token", refresh_token);
		} else {
			setToCookie("access_token", "access_token");
			setToCookie("refresh_token", "refresh_token");
			notificationMaker("خطایی رخ داده است ", "error", "دوباره تلاش کنید");
		}
	};
	// return
	return (
		<div className="flex flex-col items-center py-5">
			<div className="flex items-center gap-1">
				<img
					src={"/assets/icon/Bia2band1.svg"}
					alt="guaranty-u-img"
					className="rounded-full"
					height={50}
					loading="lazy"
				/>
				<strong className="text-xl">بیا توبند</strong>
			</div>
			<p className="text-2xl">ورود یا ثبت نام</p>
			<p className="-mt-3 text-slate-400">لطفا شماره موبایل یا ایمیل خود را وارد نمایید</p>
			<Form
				form={form}
				name="auth-form"
				className="search-form w-full text-center pt-3"
				layout="vertical"
				onFinish={onSubmit}
			>
				{/* <Inputs required={true} name="names" placeholder={t("شماره موبایل یا ایمیل ...")} classes="w-1/2 py-3" /> */}
				<Inputs required={true} name="username" defaultValue={"admin"} classes="w-1/2 py-3" />
				<Inputs
					required={true}
					type="password"
					name="password"
					defaultValue={"123#EDCrtg"}
					classes="w-1/2 py-3"
				/>
				<Buttons
					content={<span className="px-10">{t("ورود")}</span>}
					htmlType="submit"
					type="dashed"
					size="large"
					classes="mt-2"
				/>
			</Form>
			<p>
				با ورود به بیا تو بند ,
				<strong className="text-blue-600 cursor-pointer">شرایط و قوانین حریم خصوصی</strong> را می پذیرم
			</p>
		</div>
	);
};

export default Auth;
