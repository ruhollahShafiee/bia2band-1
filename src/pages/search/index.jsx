import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "antd";
import { SearchForm, RadioGroup, ListModule, AppCard } from "@/components";

import img from "/assets/image/test.jpg";
const title = "سامان حشمتی";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";

const { Title } = Typography;

const SearchPage = () => {
	const [items, setItems] = useState(Array.from({ length: 50 }).map((_, idx) => `${idx + 1}`));
	const [userTypeName, setUserType] = useState("");
	// hooks
	const formRef = useRef();
	const { t } = useTranslation();
	// handles
	const onSubmit = (formValues) => {};
	// init
	useEffect(() => {
		const { userTypeOptions, getFieldsValue } = formRef?.current || {};
		if (userTypeOptions) {
			const { userType } = getFieldsValue();
			const { label } = userTypeOptions.find(({ value }) => value === userType);
			setUserType(label);
		}
	}, [formRef]);
	// options
	const filterOptions = [
		{
			label: t("مرتبط ترین"),
			value: "1",
		},
		{
			label: t("پربازدید ترین"),
			value: "2",
		},
		{
			label: t("تکمیل پروفایل"),
			value: "3",
		},
		{
			label: t("فعال ترین"),
			value: "4",
		},
	];
	// return
	return (
		<>
			{/* SearchForm */}
			<SearchForm {...{ onSubmit, classes: "mt-10" }} ref={formRef} />
			{/* SearchItems */}
			<section className="producer-sections mx-auto p-5 mt-8">
				<div className="flex justify-between align-bottom items-end mb-3">
					<Title level={2}>{userTypeName}</Title>
					<RadioGroup
						classes="opacity-70"
						plainOptions={filterOptions}
						name="filters"
						initialValue={"1"}
						required={true}
						optionType={"button"}
					/>
				</div>
				<ListModule
					dataSource={items.map((key) => ({
						key,
						content: <AppCard id="1" imgUrl={img} {...{ title, description }} />,
					}))}
				/>
			</section>
		</>
	);
};

export default SearchPage;
