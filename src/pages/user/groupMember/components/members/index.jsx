import { Card, Form, Avatar, Col, Row, Divider, Badge, Space } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import img from "../../components/test.jpg";
import banner from "/assets/icon/pic2.svg";
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
			<Card cover={<img src={banner} className="md:h-36 h-24 object-cover" />} bordered>
				<Meta avatar={<Avatar src={banner} className="-mt-16 md:size-24 size-20 mb-5" />} />
				<Title level={4}>
					{title}
				</Title>
				<Form name="member-form" className="member-form mt-5 text-xs md:text-sm" layout="vertical">
					<Row gutter={[32, 32]} justify={"center"} align={"middle"}>
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
					<Row gutter={[8, 8]}>
						<Divider orientation="left">
							<Title level={5}>اطلاعات گروه</Title>
						</Divider>
						<Col xs={24} md={16} lg={12}>
							<Inputs
								name="name"
								label="نام گروه"
								placeholder={t("گروه ارسباران")}
								extraClasses="flex-grow"
							/>
						</Col>
						<Col xs={24} md={16} lg={12}>
							<Inputs
								name="duration"
								label="مدت زمان تشکیل گروه"
								placeholder="3 سال"
								extraClasses="flex-grow"
							/>
						</Col>
					</Row>
					<div className="flex justify-around">
						<div className="flex gap-5 flex-col justify-center align-middle items-center">
							<video controls poster={img} height={200} width={300} className="rounded-lg object-fill">
								<source src={img} height={200} width={300} type="video/mp4" />
							</video>
							<Buttons content={t("+ افزودن ویدئو گروه")} type="default" htmlType="button" />
						</div>
						<div className="flex gap-5 flex-col justify-center align-middle items-center">
							<img src={img} height={200} width={300} className="rounded-lg" />
							<Buttons content={t("+ افزودن تصویر")} 
							type="default" 
							htmlType="button" 
							/>
						</div>
					</div>
				</Form>
			</Card>
		</>
	);
};

export default Members;
