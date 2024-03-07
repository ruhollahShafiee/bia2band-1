import { Typography, Card } from "antd";

import { Buttons } from "@/components";

const { Title } = Typography;
const { Meta } = Card;

const title = "درباره ما";
const description = "مطالبی در مورد بیا تو بند در این قسمت نوشته می شود.\n اهداف و ارزشی که این سایت خلق می کند شرح داده می شود به نحوی که کاربر با مشاهده این بخش توضیحات بیشتر را کلیک کرده و سریعا اکانت را می سازد.کاربر با مشاهده این بخش توضیحات بیشتر را کلیک کرده و سریعا اکانت خود را می سازد.";

const AboutSection = () => {
	return (
		<section id="about-grid" className="mx-auto p-5 md:mt-8">
			<div className="grid gap-4 grid-cols-2">
				<div className="col-span-2 md:col-span-1">
					<div className="flex flex-col justify-between h-full">
						<Meta
							title={
								<Title level={2} className=" mb-3 pt-5">
									{title}
								</Title>
							}
							description={
								<p className="text-justify text-slate-500">
									{description}
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
				<div className="hidden md:block col-span-1">
					<img src={"/assets/icon/pic2.svg"} alt="contact-us-img" className="object-cover rounded-lg" loading="lazy" />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
