import { Card, Row, Col } from "antd";
import img from "/assets/image/test.jpg";
import { Buttons } from "@/components";

const title1 = "درباره من";
const title2 = "نمونه کار ویدیویی من";
const description =
	"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و ";

const About = () => {
	return (
		<Card className="md:p-5">
			<Row gutter={[8, 8]} justify={"space-between"}>
				<Col xs={24} md={12}>
					<h3 className="text-xl">{title1}</h3>
					<p className="text-slate-500 text-justify text-sm font-normal">{description}</p>
				</Col>
				<Col xs={24} md={12} className="flex flex-col items-center gap-3">
					<h3>{title2}</h3>
					<video controls poster={img} height={200} width={200} className="rounded-xl object-fill">
						<source src={img} type="video/mp4" />
					</video>
					<Buttons
						content={"مشاهده همه ی کارها"}
						type="default"
						htmlType="button"
					/>
				</Col>
			</Row>
		</Card>
	);
};

export default About;
