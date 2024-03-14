import { Card, Row, Col } from "antd";
import { Buttons } from "@/components";

const About = ({ user = {} }) => {
	const { aboutMe = "", profile } = user;
	return (
		<Card className="md:p-5">
			<Row gutter={[8, 8]} justify={"space-between"}>
				<Col xs={24} md={12}>
					<h3 className="text-xl">درباره من</h3>
					<p className="text-slate-500 text-justify text-sm font-normal">{aboutMe}</p>
				</Col>
				<Col xs={24} md={12} className="flex flex-col items-center gap-3">
					<h3>نمونه کار ویدیویی من</h3>
					<video
						controls
						poster={profile?.mediaUrl}
						height={200}
						width={200}
						className="rounded-xl object-fill"
					>
						<source src={profile?.mediaUrl} type="video/mp4" />
					</video>
					<Buttons content={"مشاهده همه ی کارها"} type="default" htmlType="button" />
				</Col>
			</Row>
		</Card>
	);
};

export default About;
