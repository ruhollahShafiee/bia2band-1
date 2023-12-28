import { useRef } from "react";
import { SearchForm } from "@/components";
import SwipeSection from "./components/swipe";
import BanderGrid from "./components/bander";
import Producers from "./components/producers";
import ShopGrid from "./components/shop";
import Blogs from "./components/blogs";
import AboutSection from "./components/about";
import JoinUs from "./components/joinUs";

const HomePage = () => {
	const formRef = useRef();
	// handles
	const onSubmit = (formValues) => {};
	// return
	return (
		<>
			<SwipeSection />
			{/* SearchForm */}
			<SearchForm {...{ onSubmit, classes: "-mt-16" }} ref={formRef} />
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
		</>
	);
};

export default HomePage;
