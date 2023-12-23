// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/scrollbar";

const SwipeModule = ({
	swiperSliders = [], // key,content
	slidesPerView = 1,
	spaceBetween = 30,
	navigation = true,
	delay = 5000,
	loop = true,
	onSwiper = () => {},
	onSlideChange = () => {},
	classes = "",
}) => {
	return (
		<Swiper
			modules={[Navigation]}
			className={classes}
			autoplay={{ delay, pauseOnMouseEnter: true, waitForTransition: true }}
			{...{ slidesPerView, loop, spaceBetween, navigation, onSwiper, onSlideChange }}

			// pagination={{ clickable: true }}
			// scrollbar={{ draggable: true }}
		>
			{swiperSliders.map(({ key, content = "" }, idx) => (
				<SwiperSlide key={key || `${idx}`}>{content}</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwipeModule;
