import { forwardRef, useImperativeHandle } from "react";
import { useTranslation } from "react-i18next";

import { Col, Form, Row } from "antd";
import { AppstoreOutlined, SearchOutlined, EnvironmentOutlined } from "@ant-design/icons";

import { Buttons, Inputs, Selects, RadioGroup } from "@/components";

const SearchForm = forwardRef(function Searching({ onSubmit = () => {}, classes = "", name = "search-form" }, ref) {
	// hooks
	const { t } = useTranslation();
	const [form] = Form.useForm();
	// options
	const userTypeOptions = [
		{
			label: t("نوازندگان"),
			value: "1",
		},
		{
			label: t("خوانندگان"),
			value: "2",
		},
		{
			label: t("ترانه سراها"),
			value: "3",
		},
		{
			label: t("کسب و کارها"),
			value: "4",
		},
	];
	// forwardRef
	useImperativeHandle(ref, () => ({ ...(form || {}), userTypeOptions }), [form]);
	// return
	return (
		<section className={`mx-auto max-w-6xl px-8 pt-8 lg:pt-14 rounded-3xl shadow-2xl borders ${classes}`}>
			<Form name={name} form={form} className="search-form" layout="vertical" onFinish={onSubmit}>
				<Row gutter={[8, 8]} align={"middle"}>
					<Col span={24}>
						<RadioGroup
							plainOptions={userTypeOptions}
							name="userType"
							initialValue={"1"}
							required={true}
							size="large"
						/>
					</Col>
					<Col xs={24} md={12} lg={8}>
						<Inputs
							name="names"
							placeholder={t("نام شخص , گروه , ساز و ...")}
							prefix={<SearchOutlined className="mx-2 text-gray-400/75" />}
						/>
					</Col>
					<Col xs={24} md={12} lg={6}>
						<Selects
							name="city"
							placeholder={
								<div className="flex gap-2 align-middle items-center">
									<EnvironmentOutlined className="pb-1" />
									<span>نام شهر</span>
								</div>
							}
						/>
					</Col>
					<Col xs={24} md={12} lg={6}>
						<Selects
							name="groups"
							placeholder={
								<div className="flex gap-2 align-middle items-center">
									<AppstoreOutlined className="pb-1" />
									<span> همه دسته بندی ها</span>
								</div>
							}
						/>
					</Col>
					<Col xs={24} md={12} lg={4}>
						<Buttons content={t("جست و جو")} htmlType="submit" block={true} />
					</Col>
				</Row>
			</Form>
		</section>
	);
});

export default SearchForm;
