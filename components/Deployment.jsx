import Image from "next/image";
import Deploy from "@assets/deploy.png";
import DeploymentIcon from "@assets/deployment.svg";
import Solana from "@assets/solana.png";
import SolanaIcon from "@assets/solana.svg";

const Deployment = () => {
	return (
		<section>
			<div className="flex flex-wrap justify-center gap-8 mt-7 w-full">
				<div className="md:w-[700px] w-[450px] h-[500px] bg-zinc-900 border border-zinc-500 rounded-[20px] overflow-hidden">
					<div className="relative h-full">
						<Image src={Deploy} alt="Universe" fill className="object-cover" />
						<div className="absolute bottom-[10.5rem] left-5 w-10 h-10">
							<DeploymentIcon />
						</div>

						<div className="absolute bottom-20 left-5">
							<h1 className="text-[25px] font-medium">
								Out of the box <br /> deployment
							</h1>
						</div>

						<div className="absolute bottom-4 left-5 max-w-[350px]">
							<h1 className="text-[18px] text-zinc-500">
								Pre Configured Deployment of <br />
								Your Favorite ML Stacks
							</h1>
						</div>
					</div>
				</div>

				<div className="md:w-[450px] w-[450px]  h-[500px] bg-zinc-900 border border-zinc-500 rounded-[20px] overflow-hidden">
					<div className="relative h-full">
						<Image src={Solana} alt="" fill className="" />
						<div className="absolute bottom-[7rem] left-5 w-10 h-10">
							<SolanaIcon />
						</div>

						<div className="absolute bottom-20 left-5">
							<h1 className="text-[25px] font-medium">
								Instant Payment on Solana
							</h1>
						</div>

						<div className="absolute bottom-4 left-5 max-w-[350px]">
							<h1 className="text-[18px] text-zinc-500">
								Unlock Compute In Seconds With <br /> Solana Pay
							</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Deployment;
