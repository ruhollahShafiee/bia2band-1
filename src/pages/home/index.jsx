import { useState } from "react";

import { SwipeModule } from "@/components";
import Producers from "./components/producers";

import img from "./components/test.jpg";
import SearchForm from "./components/search";
import BanderGrid from "./components/bander";
import ShopGrid from "./components/shop";

const HomePage = () => {
	const [swiperSliders, setSwiperSliders] = useState([{ key: "1" }, { key: "2" }, { key: "3" }]);
	// return
	return (
		<>
			<SwipeModule
				swiperSliders={swiperSliders.map(({ key }) => ({
					key,
					content: <img src={img} alt="" loading="lazy" className="w-full h-96 object-fill rounded-3xl" />,
				}))}
				classes="my-5"
			/>
			<section
				id="search-form"
				className="mx-auto max-w-6xl px-8 pt-8 lg:pt-14 rounded-3xl -mt-10 shadow-2xl border border-gray-200"
			>
				<SearchForm />
			</section>
			<section
				id="bander-grid"
				className="mx-auto max-w-6xl mt-8 p-5 rounded-3xl shadow-2xl border border-gray-200"
			>
				<BanderGrid />
			</section>
			<Producers />
			<Producers />
			<Producers />
			<Producers />
			<section id="shop-grid" className="mx-auto max-w-7xl px-5 pt-8 lg:p-10">
				<ShopGrid />
			</section>
		</>
	);
};

export default HomePage;
