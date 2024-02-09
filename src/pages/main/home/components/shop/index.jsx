import { Typography } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";

import { Buttons } from "@/components";

const { Title } = Typography;

const ShopGrid = () => (
	<section id="shop-grid" className="mx-auto p-5 mt-8">
		<div className="flex justify-between align-bottom items-end">
			<div className="producer-title">
				<Title level={2}>کسب و کار ها</Title>
				<p className="my-3 text-slate-400 text-xs p-2 md:text-base">
					شما دراین بخش می توانید مورد علاقه خود را پیدا کنید
				</p>
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
		<section id="shop-cards" className="p-5 rounded-3xl shadow-2xl border border-gray-200">
			<div className="grid grid-rows-4 grid-flow-col gap-2 h-[600px]">
				<div className="md:row-span-2 md:col-span-2 h-full w-full rounded-2xl bg-slate-200 flex items-end justify-center">
					<Buttons
						content={<span className="pt-1 px-10 md:px-20">فروشگاه ساز</span>}
						type="dashed"
						htmlType="button"
						classes="text-sm"
					/>
				</div>
				<div className="md:row-span-2 md:col-span-1 h-full w-full rounded-2xl bg-purple-200 flex items-end justify-center">
					{" "}
					<Buttons
						content={<span className="pt-1 px-10 md:px-20">آموزشگاه</span>}
						type="dashed"
						htmlType="button"
						classes="text-sm"
					/>
				</div>
				<div className="md:row-span-2 md:col-span-1 h-full w-full rounded-2xl bg-purple-200 flex items-end justify-center">
					{" "}
					<Buttons
						content={<span className="pt-1 px-10 md:px-20">پلاتو</span>}
						type="dashed"
						htmlType="button"
						classes="text-sm"
					/>
				</div>
				<div className="md:row-span-4 md:col-span-3 h-full w-full rounded-2xl bg-blue-200 flex items-end justify-center">
					{" "}
					<Buttons
						content={<span className="pt-1 px-10 md:px-20">استدیو</span>}
						type="dashed"
						htmlType="button"
						classes="text-sm"
					/>
				</div>
			</div>
		</section>
	</section>
);

export default ShopGrid;
