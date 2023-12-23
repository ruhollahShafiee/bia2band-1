import { Carousel } from "antd";

import ProducerCards from "./CardSection";

export default function Producers() {
	return (
		<section className="producer-sections mx-auto max-w-7xl px-5 pt-8 lg:p-10">
			<div className="producer-title text-white mb-10 text-center">
				<h2 className="text-5xl font-extrabold">برترین آهنگسازان</h2>
				<p className="my-3 text-slate-400">
					تمام دوره ها پشتیبانی ۲۴ ساعته و مادام العمر و همچنین گروه پرسش و پاسخ تلگرامی توسط اساتید مربوطه
					دارن پس با خیال راحت خریــــد کن ...
				</p>
			</div>
			<Carousel key="producers" id="producers" dotPosition="right" autoplaySpeed={5000} autoplay waitForAnimate>
				<ProducerCards id="1" />
				<ProducerCards id="2" />
				<ProducerCards id="3" />
			</Carousel>
			<div key={"appBlue"} className={`hidden border-appBlue bg-appBlue text-appBlue shadow-appBlue`} />
			<div key={"appGrey"} className={`hidden border-appGrey bg-appGrey text-appGrey shadow-appGrey`} />
			<div key={"appOrange"} className={`hidden border-appOrange bg-appOrange text-appOrange shadow-appOrange`} />
		</section>
	);
}
