import { Card, Form, Avatar, Col, Row, Divider, Badge, Space } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import { Buttons, Inputs } from "@/components";
import { useTranslation } from "react-i18next";
import Title from "antd/es/typography/Title";

import pic from "/assets/icon/avatar.svg";

const title = "اعضای گروه";

const Members = () => {
	const { t } = useTranslation();
	const [images, setImages] = useState([
		{ id: "1" },
		{ id: "2" },
		{ id: "3" },
		{ id: "4" },
		{ id: "5" },
		{ id: "6" },
	]);
	return (
		<>
			<Card cover={<img src={"/assets/icon/pic2.svg"} className="h-32 md:h-56 object-cover" />} bordered>
				<Meta
					avatar={[
						<Avatar
							key={"profile-img"}
							src={"/assets/icon/pic2.svg"}
							className="-mt-16 size-20 md:-mt-32 md:size-44"
							alt="profile-img"
						/>,
					]}
				/>
				<Title level={4} className="p-5 md:p-10 lg:px-6 lg:py-6">
					{title}
				</Title>
				<Form name="member-form" className="member-form mt-5 text-xs md:text-sm" layout="vertical">
					<Row gutter={[8, 8]} justify={"center"} align={"middle"} className="p-5 md:p-10 lg:px-6 lg:py-6">
						{images.map(({ id }) => (
							<Col key={id}>
								<img src={pic} id={`image-${id}`} className="rounded-full md:size-20 size-14" />
								<Space md:size="small">
									<Badge
										dot={true}
										offset={[24, -18]}>
									</Badge>
									<Badge
										count={0}
										showZero
										offset={[38, -10]}
										size="small">
									</Badge>
								</Space>
							</Col>
						))}
					</Row>
				<Row gutter={[8, 8]} className="p-5 md:p-10 lg:px-20 lg:py-10">
						<Divider orientation="left">
							<Title level={5}>اطلاعات گروه</Title>
						</Divider>
						<Col xs={24} md={12}>
							<Inputs
								name="name"
								label="نام گروه"
								placeholder={t("گروه ارسباران")}
								extraClasses="flex-grow"
							/>
						</Col>
						<Col xs={24} md={12}>
							<Inputs
								name="duration"
								label="مدت زمان تشکیل گروه"
								placeholder="3 سال"
								extraClasses="flex-grow"
							/>
						</Col>
					</Row>
					<div className="flex flex-col md:flex-row justify-around">
						<div className="flex gap-5 flex-col justify-center align-middle items-center">
							<video
								controls
								poster={"/assets/image/test.jpg"}
								height={200}
								width={300}
								className="rounded-lg object-fill"
							>
								<source src={"/assets/image/test.jpg"} height={200} width={300} type="video/mp4" />
							</video>
							<Buttons content={t("+ افزودن ویدئو گروه")} type="default" htmlType="button" />
						</div>
						<div className="flex gap-5 flex-col justify-center align-middle items-center">
							<img src={"/assets/image/test.jpg"} height={200} width={300} className="rounded-lg" />
							<Buttons content={t("+ افزودن تصویر")} type="default" htmlType="button" />
						</div>
					</div>
				</Form>
			</Card>
		</>
	);
};

export default Members;
