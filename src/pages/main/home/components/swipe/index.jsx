import { useState } from "react";
import { CarouselModule } from "@/components";

import img from "/assets/icon/pic.svg";

const SwipeSection = () => {
	const [swiperSliders, setSwiperSliders] = useState([{ key: "1" }, { key: "2" }, { key: "3" }]);
	return (
		<CarouselModule
			effect="fade"
			dotPosition="right"
			className="my-5"
			swiperSliders={swiperSliders.map(({ key }) => (
				<img src={img} alt="" loading="lazy" className="w-full h-96 object-cover rounded-3xl" key={key} />
			))}
		/>
	);
};

export default SwipeSection;
