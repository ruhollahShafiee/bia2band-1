import { useRef, useState } from "react";
import { Typography } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";

import { SearchForm, Buttons, ListModule, AppCard } from "@/components";

import img from "/assets/image/test.jpg";
const title = "سامان حشمتی";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";

const { Title } = Typography;

const SearchPage = () => {
	const [items, setItems] = useState(Array.from({ length: 50 }).map((_, idx) => `${idx + 1}`));
	// hooks
	const formRef = useRef();
	// handles
	const onSubmit = (formValues) => {};
	// return
	return (
		<>
			{/* SearchForm */}
			<SearchForm {...{ onSubmit, classes: "mt-10" }} ref={formRef} />
			{/* SearchItems */}
			<section className="producer-sections mx-auto p-5 mt-8">
				<div className="flex justify-between align-bottom items-end">
					<div className="producer-title">
						<Title level={2}>برترین آهنگسازان</Title>
						<p className="my-3 text-slate-400">شما دراین بخش می توانید مورد علاقه خود را پیدا کنید</p>
					</div>
					<Buttons
						content={
							<div className="flex gap-2 align-middle items-center ">
								<span className="p-1"> مشاهده همه </span>
								<DoubleLeftOutlined />
							</div>
						}
						type="dashed"
						htmlType="button"
						size="default"
						classes="text-sm"
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
