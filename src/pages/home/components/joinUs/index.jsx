import Meta from "antd/es/card/Meta";

import { Buttons } from "@/components";

import img from "../test.jpg";

const title = "سامان حشمتی";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتیسام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";

const JoinUs = () => {
	return (
		<section id="shop-grid" className="mx-auto p-5 mt-8">
			<div className="grid gap-4 grid-cols-2">
				<div className="col-span-1" dir="ltr">
					<img src={img} alt="contact-us-img" className="object-cover rounded-lg" loading="lazy" />
				</div>
				<div className="col-span-1">
					<div className="flex flex-col justify-between h-full">
						<Meta
							title={<h5 className="text-3xl mb-3 pt-5">{title}</h5>}
							description={
								<p className="text-sm text-justify text-slate-500">
									{description + description + description + description + description + description}
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
