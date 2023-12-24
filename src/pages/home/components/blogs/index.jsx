import { Carousel, Typography } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";

import { Buttons } from "@/components";
import BlogCards from "./BlogCards";

const { Title } = Typography;

export default function Blogs() {
	return (
		<section className="blog-sections mx-auto p-5 mt-8">
			<div className="flex justify-between align-bottom items-end">
				<div className="blog-title">
					<Title level={2}>بلاگ</Title>
				</div>
				<Buttons
					content={
						<div className="flex gap-2 align-middle items-center ">
							<span className="p-1"> مشاهده همه </span>
							<DoubleLeftOutlined />
						</div>
					}
					type="dashed"
					htmlType="button"
					size="default"
					classes="text-sm"
				/>
			</div>
			<Carousel key="blogs" id="blogs" autoplaySpeed={10000} autoplay waitForAnimate>
				<BlogCards id="1" />
				<BlogCards id="2" />
				<BlogCards id="3" />
			</Carousel>
		</section>
	);
}
