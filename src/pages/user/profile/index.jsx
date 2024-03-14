import { useEffect } from "react";
import { Form } from "antd";
import { useSelector } from "react-redux";

import { userSelector } from "@/store/selector";

import About from "./components/about";
import MyProfile from "./components/myProfile";
import MySkills from "./components/mySkills";

const UserProfilePage = () => {
	// hooks
	const [form] = Form.useForm();
	const user = useSelector(userSelector, {
		equalityFn: ({ id }, nextUser) => id !== nextUser?.id,
	});
	// handles
	const onFinish = async () => {};
	// initialize
	useEffect(() => {
		form.setFieldsValue(user || {});
	}, [form, user]);
	// return
	return (
		<section className="flex flex-col md:gap-5 gap-2 md:mt-5 mt-1">
			<Form name="profile-user-form" form={form} onFinish={onFinish}>
				<MyProfile user={user} />
				<About user={user} />
				<MySkills user={user} />
			</Form>
		</section>
	);
};

export default UserProfilePage;
