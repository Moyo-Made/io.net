import Image from "next/image";
import Hundred from "@assets/100x.png";
import { Globe, Leaf} from "lucide-react";
import GridItem from "./GridItem";
import Processor from "@assets/processor.svg";
import Chips from "@assets/chips.svg";
import Security from "@assets/security.svg";

const MoreGPUs = () => {
	return (
		<section className="md:mt-32 mt-16">
			<div className="flex flex-col justify-center">
				<Image src={Hundred} />

				<div className="text-center ">
					<h1 className="md:text-[50px] text-[30px] font-medium">
						<span className="blur-effect" data-text="More GPUs">
							More GPUs
						</span>{" "}
						<br />
						Than Major Competitors
					</h1>

					<div className="mt-3">
						<span className="text-zinc-500 md:text[20px] text-[15px]">
							Turn your GPU into a money-making machine with IO.NET
						</span>
					</div>
				</div>
			</div>

			<div className="flex flex-col max-w-5xl mt-20 md:ml-40">
				<div className="grid md:grid-cols-3 grid-cols-1 md:text-auto text-center">
					<GridItem
						icon={<Globe className="w-6 h-6" />}
						title="Global GPU Access"
						description="We Provide GPU Access Worldwide Across +138 Countries"
					/>
					<GridItem
						icon={<Chips className="w-6 h-6" />}
						title="Best in class chips"
						description="We Offer The Best Selection Of Optimal AI Processors"
					/>
					<GridItem
						icon={<Processor className="w-6 h-6" />}
						title="Processor Flexibility"
						description="We Provide Flexible And Scalable Clusters With Auto Scaling As Your User Base Grows"
					/>
					<GridItem
						icon={<Leaf className="w-6 h-6" />}
						title="Sustainable, Yet Powerful"
						description="Through Our Green Committed Data Center Partners, We Provide Sustainable"
					/>
					<GridItem
						icon={<Security className="w-6 h-6" />}
						title="Ultra Security"
						description="Security Compliance With SOC2 And End To End Encryption"
					/>
				</div>
			</div>
		</section>
	);
};

export default MoreGPUs;
