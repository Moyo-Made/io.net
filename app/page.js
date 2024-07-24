import BreakingPrices from "@components/BreakingPrices";
import Cloud from "@components/Cloud";
import DemandAccess from "@components/DemandAccess";
import Hero from "@components/Hero";
import MoreGPUs from "@components/MoreGPUs";
import Partners from "@components/Partners";

const Home = () => {
	return (
		<div>
			<Hero />
			<Cloud />
			<DemandAccess />
			<BreakingPrices />
			<MoreGPUs />
			<Partners />
		</div>
	);
};

export default Home;
