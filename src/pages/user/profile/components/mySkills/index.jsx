import { useState } from "react";
import { Card, Col, Row } from "antd";

import img from "/assets/image/test.jpg";

const SingleSkillSection = ({ title = "", descriptions = [] }) => (
	<Row gutter={[8, 8]} className="flex flex-col md:flex-row justify-center align-middle pb-5">
		<Col xs={24} md={12}>
			<h3 className="mb-2">{title}</h3>
			<ul className="list-disc text-sm text-slate-500">
				{descriptions.map((item, idx) => (
					<li key={item + idx}>{item}</li>
				))}
			</ul>
		</Col>
		<Col xs={24} md={12} className="flex justify-start  md:justify-end gap-5 pt-5">
			<img src={img} height={120} width={120} className="rounded-xl" />
			<video controls poster={img} height={120} width={120} className="rounded-xl object-fill">
				<source src={img} type="video/mp4" />
			</video>
		</Col>
	</Row>
);

const Instrument = () => {
	const skills = [
		{
			key: "part-1",
			title: "کارگاه های آموزشی و مستر کلاس هایی که شرکت کردم :",
			descriptions: ["کارگاه تئوری موسیقی ارشد طهماسبی", "کارگاه تئوری موسیقی طهماسبی"],
		},
		{
			key: "part-2",
			title: "سابقه ی تدریس در آموزشگاه های :",
			descriptions: ["فجر", "گندم", "فجر", "گندم"],
		},
		{
			key: "part-3",
			title: "سابقه ی اجرا روی صحنه :",
			descriptions: ["ارسباران"],
		},
		{
			key: "part-4",
			title: "سابقه ی همکاری با رسانه ی ملی :",
			descriptions: ["شبکه 5"],
		},
		{
			key: "part-5",
			title: "سابقه ی حضور در آلبوم های موسیقی :",
			descriptions: ["خواب های طلایی", " خواب های طلایی 2"],
		},
	];
	// returnJSX
	return (
		<section id="instrument-grid">
			{skills.map((skill) => (
				<SingleSkillSection key={skill.key} {...skill} />
			))}
		</section>
	);
};

const contentList = {
	instrument1: <Instrument />,
	instrument2: <Instrument />,
	instrument3: <Instrument />,
};

const MySkills = () => {
	const [activeTabKey, setActiveTabKey] = useState("instrument1");
	// tabs
	const tabList = [
		{
			key: "instrument1",
			tab: "ساز اصلی",
			className: "!text-3xl",
		},
		{
			key: "instrument2",
			tab: "ساز دوم",
			className: "!text-3xl",
		},
		{
			key: "instrument3",
			tab: "ساز سوم",
			className: "!text-3xl",
		},
	];
	// handles
	const onTab1Change = (key) => {
		setActiveTabKey(key);
	};
	return (
		<>
			<Card
				title={<span className="text-xl">مهارت های من</span>}
				tabList={tabList}
				activeTabKey={activeTabKey}
				onTabChange={onTab1Change}
				className="md:p-5"
			>
				{contentList[activeTabKey]}
			</Card>
		</>
	);
};

export default MySkills;
