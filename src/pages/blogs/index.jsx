import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "antd";
import { SearchBlogs, RadioGroup, ListModule, BlogCard } from "@/components";

const title = "سامان حشمتی";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";

const { Title } = Typography;

const BlogsPage = () => {
	const [items, setItems] = useState(Array.from({ length: 50 }).map((_, idx) => `${idx + 1}`));
	// hooks
	const formRef = useRef();
	const { t } = useTranslation();
	// handles
	const onSubmit = (formValues) => {};

	// options
	const filterOptions = [
		{
			label: t("مرتبط ترین"),
			value: "x",
		},
		{
			label: t("پربازدید ترین"),
			value: "y",
		},
	];
	// return
	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			{/* SearchForm */}
			<SearchBlogs {...{ onSubmit, classes: "mt-10" }} ref={formRef} />
			{/* SearchItems */}
			<section className="producer-sections mx-auto p-5 mt-8">
				<div className="flex justify-between align-middle items-center mb-3">
					<Title level={2}>مقالات</Title>
					<RadioGroup
						extraClasses="opacity-70"
						plainOptions={filterOptions}
						name="filters"
						initialValue={"x"}
						required={true}
						outForm={true}
						optionType={"button"}
					/>
				</div>
				<ListModule
					column={1}
					pageSize={5}
					dataSource={items.map((key) => ({
						key,
						content: <BlogCard id="1" imgUrl={"/assets/image/test.jpg"} {...{ title, description }} flexRow />,
					}))}
				/>
			</section>
		</div>
	);
};

export default BlogsPage;
