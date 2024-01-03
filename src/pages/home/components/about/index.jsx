import { Typography, Card } from "antd";

import { Buttons } from "@/components";

import img from "/assets/image/test.jpg";

const { Title } = Typography;
const { Meta } = Card;

const title = "سامان حشمتی";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتیسام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";

const AboutSection = () => {
	return (
		<section id="about-grid" className="mx-auto p-5 mt-8">
			<div className="grid gap-4 grid-cols-2">
				<div className="col-span-1">
					<div className="flex flex-col justify-between h-full">
						<Meta
							title={
								<Title level={2} className=" mb-3 pt-5">
									{title}
								</Title>
							}
							description={
								<p className="text-justify text-slate-500">
									{description + description + description + description + description + description}
								</p>
							}
						/>
						<Buttons
							content={<span className="text-xs">توضیحات بیشتر</span>}
							type="dashed"
							htmlType="button"
							classes="float-end"
							size="default"
						/>
					</div>
				</div>
				<div className="col-span-1">
					<img src={img} alt="contact-us-img" className="object-cover rounded-lg" loading="lazy" />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
