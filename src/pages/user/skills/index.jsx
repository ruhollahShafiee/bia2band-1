import { useState, useEffect } from "react";
import { Form, theme } from "antd";
import { useSelector } from "react-redux";

import { userSelector } from "@/store/selector";

import Personal from "../information/components/personal";
import Connect from "../information/components/connect";
import About from "../information/components/about";
import MyProfessional from "./components/profesional";
import FurtherInfo from "./components/furtherinformation";
import Portfolio from "./components/portfo";
import Description from "./components/description";
import { useAppContext } from "@/hooks";


const Skills = () => {
	const { callApi } = useAppContext();
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	// hooks
	const [form] = Form.useForm();
	const user = useSelector(userSelector, {
		equalityFn: ({ id }, nextUser) => id !== nextUser?.id,
	});
	// handles
	const onFinish = async () => {};
	// initialize
	useEffect(() => {
		const { informationQuestions = [], ...other } = user || {};
		const questions = {};
		informationQuestions.forEach(({ question }) => (questions[question] = true));
		form.setFieldsValue(Object.assign({}, questions, other));
	}, [form, user]);
	return (
		<Form name="personal-form" layout="vertical" form={form}>
			<section className="flex flex-col gap-2 md:gap-5 mt-1 md:mt-5">
				<Personal />
				<Connect />
				<About />
				<MyProfessional />
				<FurtherInfo user={user} />
				<Portfolio bgColor={colorBgContainer} />
				<Description />
			</section>
		</Form>
	);
};

export default Skills;
