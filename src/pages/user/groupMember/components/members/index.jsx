import { Card, Form, Avatar, Col, Row, Divider, Badge, Space } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import img from "../../test.jpg";
import { Buttons, Inputs } from "@/components";
import { useTranslation } from "react-i18next";
import Title from "antd/es/typography/Title";

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
			<Card cover={<img src={img} className="h-36" />} bordered>
				<Meta avatar={<Avatar src={img} className="-mt-16 size-24 mb-5" />} />
				{title}
				<Form name="member-form" className="member-form mt-5 fs-sx" layout="vertical">
					<Row gutter={[32, 32]} justify={"center"} align={"middle"}>
						{images.map(({ id }) => (
							<Col key={id}>
								<img src={img} id={`image-${id}`} className="rounded-full size-20" />
								<Space size="small">
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
