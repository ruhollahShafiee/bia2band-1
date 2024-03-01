import { useTranslation } from "react-i18next";
import { Card, Col, Form, Radio, Row } from "antd";
import { CloudUploadOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Inputs, Buttons } from "@/components";

const SingleQuestion = ({ t, title = "", names = [], hasUpload = true }) => (
	<Row gutter={[8, 8]} justify={"start"}>
		<Col xs={24} md={24}>
			<h3 className="mb-2">{title}</h3>
		</Col>
		<Col xs={24} md={6}>
			<Radio.Group name="answer">
				<Radio value={"yes"}>دارم</Radio>
				<Radio value={"no"}>ندارم</Radio>
			</Radio.Group>
		</Col>
		<Col xs={24} md={12} className="flex flex-col">
			{names.map((item) => (
				<Inputs key={item} name={item} defaultValue={item} addonAfter={<PlusCircleOutlined />} />
			))}
		</Col>
		<Col xs={24} md={6}>
			<Buttons
				disabled={!hasUpload}
				content={
					<div className="flex gap-3">
						<span className="pb-2"> {t("آپلود تصویر یا فایل ضمیمه")} </span>
						<CloudUploadOutlined className="pb-3" />
					</div>
				}
				type="dashed"
				htmlType="link"
			/>
		</Col>
	</Row>
);

const FurtherInfo = () => {
	const { t } = useTranslation();
	const furthers = [
		{
			key: "question-1",
			title: "آیا سابقه حضور در کارگاه های آموزشی و مستر کلاس ها را دارید ؟",
			names: ["کارگاه تئوری موسیقی ارشد طهماسبی"],
		},
		{
			key: "question-2",
			title: "آیا سابقه ی اجرای صحنه ای داشته اید ؟",
			names: ["ارسباران"],
		},
		{
			key: "question-3",
			title: "آیا سابقه ی ضبط استودیویی دارید ؟",
			names: ["ارسباران"],
			hasUpload: false,
		},
		{
			key: "question-4",
			title: "آیا سابقه ی حضور در آلبوم موسیقی داشته اید ؟",
			names: ["خواب های طلایی"],
		},
		{
			key: "question-5",
			title: "آیا سابقه ی حضور در جشنواره ی موسیقی داشته اید ؟",
			names: ["ارسباران"],
		},
		{
			key: "question-6",
			title: "آیا سابقه ی همکاری با گروه های موسیقی داشته اید ؟",
			names: ["ارسباران"],
		},
		{
			key: "question-7",
			title: "آیا سابقه ی همکاری با رسانه ی ملی داشته اید ؟",
			names: ["شبکه 5"],
		},
		{
			key: "question-7",
			title: "آیا سابقه ی تدریس در آموزشگاه ها را داشته اید ؟",
			names: ["آموزشگاه فجر"],
		},
	];
	return (
		<Card>
			<Form name="further-form" className="further-form mt-5 text-xs md:text-sm" layout="vertical">
				<Row className="p-2 md:p-10 lg:px-20 lg:py-10">
					<Col xs={24} md={24} className="text-2xl pb-5">
						اطلاعات تکمیلی من
					</Col>
					{furthers.map(({ key, title, names, hasUpload }) => (
						<SingleQuestion key={key} title={title} names={names} hasUpload={hasUpload} t={t} />
					))}
				</Row>
			</Form>
		</Card>
	);
};

export default FurtherInfo;
