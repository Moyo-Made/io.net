import About from "@components/About";
import Animation from "@components/Animation";
import BreakingPrices from "@components/BreakingPrices";
import Cloud from "@components/Cloud";
import DemandAccess from "@components/DemandAccess";
import Explore from "@components/Explorer";
import Hero from "@components/Hero";
import Infrastructure from "@components/Infrastructure";
import MoreGPUs from "@components/MoreGPUs";
import Partners from "@components/Partners";
import Profits from "@components/Profits";
import Work from "@components/Work";

const Home = () => {
	return (
		<div>
			<Hero />
			<Cloud />
			<DemandAccess />
			<BreakingPrices />
			<MoreGPUs />
			<Partners />
			<Work />
			<Profits />
			<Infrastructure />
			<Explore />
			<About />
			<Animation />
		</div>
	);
};

export default Home;
