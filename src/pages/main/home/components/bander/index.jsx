import { Typography } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { Buttons } from "@/components";

const { Title } = Typography;

const BanderGrid = () => (
	<section id="bander-grid" className="mx-auto mt-8 p-5 rounded-3xl shadow-2xl border h-[550px] md:h-[380px]">
		<div className="grid md:grid-rows-4 md:grid-flow-col gap-2">
			<div className="md:row-span-2 md:col-span-2 rounded-2xl bg-purple-200">
				<div className="flex flex-col justify-between p-5 h-full">
					<Title level={3}>با بیاتوبند به راحتی دیده شوید</Title>
					<Buttons
						content={
							<div className="flex gap-2 align-middle items-center">
								<span className="p-1"> شروع کنید</span>
								<DoubleLeftOutlined />
							</div>
						}
						type="dashed"
						htmlType="button"
						size="default"
						classes="text-sm float-left"
					/>
				</div>
			</div>
			<div className="md:row-span-2 md:col-span-2 rounded-2xl bg-slate-200">
				<div className="flex flex-col justify-between p-5 h-full">
					<Title level={3}>گروه خود را بسازید</Title>
					<Buttons
						content={
							<div className="flex gap-2 align-middle items-center">
								<span className="p-1"> شروع کنید</span>
								<DoubleLeftOutlined />
							</div>
						}
						type="dashed"
						htmlType="button"
						size="default"
						classes="text-sm float-left"
					/>
				</div>
			</div>
			<div className="md:row-span-4 md:col-span-3 rounded-2xl bg-blue-200">
				<div className="md:flex md:gap-20 md:justify-center md:align-middle md:items-center">
					<div className="flex flex-col justify-between p-5 h-full md:gap-3">
						<Title level={3}> دانلود اپلیکیشن </Title>
						<p> همبندی های خود را پیدا کنید </p>
						<Buttons
							content={
								<div className="flex gap-2 align-middle items-center">
									<span className="p-1"> راهنمای دانلود </span>
									<DoubleLeftOutlined />
								</div>
							}
							type="dashed"
							htmlType="button"
							size="default"
							classes="text-sm float-left"
						/>
					</div>
					<img
						className={`shadow-lg shadow-appGrey bg-black rounded-lg hidden md:block mt-10`}
						//src={"/assets/image/test.jpg"}
						//alt="app-logo"
						loading="lazy"
						width={250}
						height={250}
					/>
				</div>
			</div>
		</div>
	</section>
);

export default BanderGrid;
