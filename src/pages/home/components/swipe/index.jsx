import { useState } from "react";
import img from "../test.jpg";

import { SwipeModule } from "@/components";

const SwipeSection = () => {
	const [swiperSliders, setSwiperSliders] = useState([{ key: "1" }, { key: "2" }, { key: "3" }]);
	return (
		<SwipeModule
			swiperSliders={swiperSliders.map(({ key }) => ({
				key,
				content: <img src={img} alt="" loading="lazy" className="w-full h-96 object-fill rounded-3xl" />,
			}))}
			classes="my-5"
		/>
	);
};

export default SwipeSection;
