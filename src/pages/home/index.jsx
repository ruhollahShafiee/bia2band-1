import SwipeSection from "./components/swipe";
import SearchForm from "./components/search";
import BanderGrid from "./components/bander";
import Producers from "./components/producers";
import ShopGrid from "./components/shop";

const HomePage = () => {
	// return
	return (
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
		</>
	);
};

export default HomePage;
