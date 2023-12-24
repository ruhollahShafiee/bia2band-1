import { Carousel, Typography } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";

import { Buttons } from "@/components";
import ProducerCards from "./CardSection";

const { Title } = Typography;

export default function Producers() {
	return (
		<section className="producer-sections mx-auto max-w-7xl px-5 pt-8 lg:p-10">
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
			<Carousel key="producers" id="producers" autoplaySpeed={10000} autoplay waitForAnimate>
				<ProducerCards id="1" />
				<ProducerCards id="2" />
				<ProducerCards id="3" />
			</Carousel>
		</section>
	);
}
