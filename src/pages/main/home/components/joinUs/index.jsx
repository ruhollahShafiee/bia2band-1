import { Typography, Card } from "antd";

import { Buttons } from "@/components";

import img from "/assets/image/test.jpg";

const { Title } = Typography;
const { Meta } = Card;

const title = "تماس با ما";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتیسام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";

const JoinUs = () => {
	return (
		<section id="join-grid" className="mx-auto p-5 md:mt-8">
			<div className="grid gap-4 grid-cols-2">
				<div className="hidden md:inline-block col-span-1" dir="ltr">
					<img src={img} alt="contact-us-img" className="object-cover rounded-lg" loading="lazy" />
				</div>
				<div className="col-span-2 md:col-span-1">
					<div className="flex flex-col justify-between h-full">
						<Meta
							title={
								<Title level={2} className="mb-3 pt-5">
									{title}
								</Title>
							}
							description={
								<p className="text-justify text-slate-500">
									{description + description + description + description}
								</p>
							}
						/>
						<div className="flex gap-3 justify-end">
							<Buttons
								content={<span className="text-xs">توضیحات بیشتر</span>}
								type="dashed"
								htmlType="button"
								size="default"
							/>
							<Buttons
								content={<span className="text-xs">ثبت نام دوره ای</span>}
								htmlType="button"
								size="default"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JoinUs;
