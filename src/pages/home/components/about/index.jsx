import Meta from "antd/es/card/Meta";
import { LeftOutlined } from "@ant-design/icons";

import { Buttons } from "@/components";

import img from "../test.jpg";

const title = "سامان حشمتی";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتیسام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";

const AboutSection = () => {
	return (
		<section id="shop-grid" className="mx-auto p-5 mt-8">
			<div className="flex gap-5">
				<div className="flex-auto pt-5">
					<div className="flex flex-col justify-between h-full">
						<Meta
							title={<h5 className="text-3xl mb-3">{title}</h5>}
							description={
								<p className="text-sm text-justify text-slate-500">
									{description + description + description + description + description + description}
								</p>
							}
						/>
						<Buttons
							content={<p className="text-xs">توضیحات بیشتر</p>}
							type="dashed"
							htmlType="button"
							classes="float-end"
							size="default"
						/>
					</div>
				</div>
				<div className="flex-none w-1/2 ">
					<img src={img} alt="contact-us-img" className="object-cover rounded-lg" loading="lazy" />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
