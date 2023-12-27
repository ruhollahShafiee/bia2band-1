import { useState } from "react";
import { Typography } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";

import { Buttons, CarouselModule } from "@/components";
import ProducerCards from "./CardSection";

const { Title } = Typography;

export default function Producers() {
	const [swiperSliders, setSwiperSliders] = useState([{ key: "1" }, { key: "2" }, { key: "3" }]);
	return (
		<section className="producer-sections mx-auto p-5 mt-8">
			<div className="flex justify-between align-bottom items-end">
				<div className="producer-title">
					<Title level={2}>برترین آهنگسازان</Title>
					<p className="my-3 text-slate-400">شما دراین بخش می توانید مورد علاقه خود را پیدا کنید</p>
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
			<CarouselModule
				name="producers"
				swiperSliders={swiperSliders.map(({ key }) => (
					<ProducerCards key={key} id={key} />
				))}
			/>
		</section>
	);
}
