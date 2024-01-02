import { useRef } from "react";
import { SearchPersons } from "@/components";

import SwipeSection from "./components/swipe";
import BanderGrid from "./components/bander";
import Producers from "./components/producers";
import ShopGrid from "./components/shop";
import Blogs from "./components/blogs";
import AboutSection from "./components/about";
import JoinUs from "./components/joinUs";
import FloatLabel from "./components/float";

const HomePage = () => {
	const formRef = useRef();
	// handles
	const onSubmit = (formValues) => {};
	// return
	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<SwipeSection />
			{/* SearchForm */}
			<SearchPersons {...{ onSubmit, classes: "-mt-16 sticky" }} ref={formRef} />
			{/* BanderGrid */}
			<BanderGrid />
			{/* Producers */}
			<Producers />
			<Producers />
			<Producers />
			<Producers />
			{/* ShopGrid */}
			<ShopGrid />
			{/* About */}
			<AboutSection />
			{/* Blogs */}
			<Blogs />
			{/* JoinUs */}
			<JoinUs />
			<FloatLabel />
		</div>
	);
};

export default HomePage;
