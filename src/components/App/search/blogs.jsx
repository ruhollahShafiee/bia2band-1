import { forwardRef, useImperativeHandle } from "react";
import { useTranslation } from "react-i18next";

import { Col, Form, Row, theme } from "antd";
import { AppstoreOutlined, SearchOutlined } from "@ant-design/icons";

import { Buttons, Inputs, Selects } from "@/components";

const SearchBlogs = forwardRef(function Searching({ onSubmit = () => {}, classes = "", name = "search-blogs" }, ref) {
	// hooks
	const { t } = useTranslation();
	const [form] = Form.useForm();
	const { token } = theme.useToken();
	// forwardRef
	useImperativeHandle(ref, () => form, [form]);
	// return
	return (
		<section
			className={`mx-auto max-w-6xl p-8 rounded-3xl shadow-2xl borders ${classes}`}
			style={{ background: token?.colorBgBase }}
		>
			<Form name={name} form={form} className="search-form" layout="vertical" onFinish={onSubmit}>
				<Row gutter={[8, 8]} align={"middle"}>
					<Col xs={24} md={12} lg={8}>
						<Inputs
							name="names"
							placeholder={t("موضوع")}
							prefix={<SearchOutlined className="mx-2 text-gray-400/75" />}
						/>
					</Col>
					<Col xs={24} md={12} lg={6}>
						<Selects
							name="author"
							placeholder={
								<div className="flex gap-2 align-middle items-center">
									<AppstoreOutlined className="pb-1" />
									<span>نویسنده</span>
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
									<span>دسته بندی ها</span>
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

export default SearchBlogs;
