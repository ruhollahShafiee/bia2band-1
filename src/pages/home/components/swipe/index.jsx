import { useState } from "react";
import img from "/assets/image/test.jpg";

import { CarouselModule } from "@/components";

const SwipeSection = () => {
	const [swiperSliders, setSwiperSliders] = useState([{ key: "1" }, { key: "2" }, { key: "3" }]);
	return (
		<CarouselModule
			effect="fade"
			dotPosition="right"
			className="my-5"
			swiperSliders={swiperSliders.map(({ key }) => (
				<img src={img} alt="" loading="lazy" className="w-full h-96 object-fill rounded-3xl" key={key} />
			))}
		/>
	);
};

export default SwipeSection;
