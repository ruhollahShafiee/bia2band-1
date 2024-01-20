import { useState } from "react";
import { Typography } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";

import { Buttons, CarouselModule } from "@/components";
import BlogCards from "./BlogCards";

const { Title } = Typography;

export default function Blogs() {
	const [swiperSliders, setSwiperSliders] = useState([{ key: "1" }, { key: "2" }, { key: "3" }]);
	return (
		<section className="blog-sections mx-auto p-5 mt-8">
			<div className="flex justify-between align-bottom items-end">
				<div className="blog-title">
					<Title level={2}>بلاگ</Title>
				</div>
				<Buttons
					type="dashed"
					htmlType="button"
					size="default"
					classes="text-sm"
					content={
						<div className="flex gap-2 align-middle items-center ">
							<span className="p-1"> مشاهده همه </span>
							<DoubleLeftOutlined />
						</div>
					}
				/>
			</div>
			<CarouselModule
				name="blogs"
				swiperSliders={swiperSliders.map(({ key }) => (
					<BlogCards key={key} id={key} />
				))}
			/>
		</section>
	);
}
