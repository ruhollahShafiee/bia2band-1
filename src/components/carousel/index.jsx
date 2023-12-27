// import Swiper core and required modules
import { Carousel } from "antd";
import "./style.css";

const CarouselModule = ({
	swiperSliders = [],
	delay = 8000,
	autoplay = true,
	showDots = true,
	arrows = true,
	waitForAnimate = false,
	classes = "",
	className = "",
	dotPosition = "bottom",
	easing = "linear", // css easing !s
	effect = "scrollx", // "fade"
	name,
}) => {
	return (
		<Carousel
			id={name}
			key={name}
			autoplay={autoplay}
			dotPosition={dotPosition}
			dots={showDots}
			arrows={arrows}
			autoplaySpeed={delay}
			className={className}
			easing={easing}
			effect={effect}
			waitForAnimate={waitForAnimate}
		>
			{swiperSliders.map((swiperSlider, index) => (
				<div key={`slide-${index}`} className={classes}>
					{swiperSlider}
				</div>
			))}
		</Carousel>
	);
};

export default CarouselModule;
