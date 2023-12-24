import SwipeSection from "./components/swipe";
import SearchForm from "./components/search";
import BanderGrid from "./components/bander";
import Producers from "./components/producers";
import ShopGrid from "./components/shop";
import Blogs from "./components/blogs";
import AboutSection from "./components/about";
import JoinUs from "./components/joinUs";

const HomePage = () => (
	<>
		<SwipeSection />
		{/* SearchForm */}
		<SearchForm />
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

export default HomePage;
