import Explorer from "@assets/explorer.svg";
import Image from "next/image";
import Global from "@assets/global.svg";
import Reputation from "@assets/reputation.svg";
import PremiumSuppliers from "@assets/suppliers.svg";
import ChipIcon from "@assets/chip-icon.svg";
import Inference from "@assets/inference.svg";
import IdVentures from "./IdVentures";

const Explore = () => {
	return (
		<section className="md:mt-28 mt-9">
			<div className="flex flex-col justify-center items-center">
				<div className="bg-zinc-800 border border-zinc-500 py-2 px-3 rounded-full">
					<Explorer size={50} />
				</div>

				<div className="mt-10">
					<h1 className="md:text-[48px] text-[26px] font-medium text-center">
						Every Network Needs <br />
						<span className="blur-effect" data-text="A Great Explorer">
							A Great Explorer
						</span>
					</h1>
				</div>

				<div className="flex flex-wrap gap-4">
					<div className="mt-10 md:w-[700px] w-[400px] h-[400px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
						<div className="relative h-full">
							<Image
								src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglobal-infrastructure-background.e2d764b0.png&w=3840&q=75"
								alt=""
								fill
								className="object-cover w-[200px] h-[200px]"
							/>
							<div className="absolute bottom-[7.5rem] left-5 w-10 h-10">
								<Global />
							</div>

							<div className="absolute bottom-20 left-5">
								<h1 className="text-[25px] font-medium">
									Global Infrastructure
								</h1>
							</div>

							<div className="absolute bottom-4 left-5 max-w-[350px]">
								<h1 className="text-[18px] text-zinc-500">
									A Massive Grid Of GPUs Across 139+ Countries
								</h1>
							</div>
						</div>
					</div>

					<div className="mt-10 w-[400px] h-[400px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
						<div className="relative h-full">
							<Image
								src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freputation-score-background.182f3dd3.png&w=3840&q=75"
								alt=""
								fill
								className="object-cover w-[200px] h-[200px]"
							/>
							<div className="absolute bottom-[7.5rem] left-5 w-10 h-10">
								<Reputation />
							</div>

							<div className="absolute bottom-20 left-5">
								<h1 className="text-[25px] font-medium">Reputation Score</h1>
							</div>

							<div className="absolute bottom-4 left-5 max-w-[350px]">
								<h1 className="text-[18px] text-zinc-500">
									Track Transparent Supply And Uptime Scores
								</h1>
							</div>
						</div>
					</div>
				</div>

				{/* 2nd row */}
				<div className="flex flex-wrap gap-4">
					<div className="mt-10 w-[400px] h-[400px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
						<div className="relative h-full">
							<Image
								src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpremium-suppliers-background.83541558.png&w=3840&q=75"
								alt=""
								fill
								className="object-cover w-[200px] h-[200px]"
							/>
							<div className="absolute bottom-[7.5rem] left-5 w-10 h-10">
								<PremiumSuppliers />
							</div>

							<div className="absolute bottom-20 left-5">
								<h1 className="text-[25px] font-medium">Premium Suppliers</h1>
							</div>

							<div className="absolute bottom-4 left-5 max-w-[350px]">
								<h1 className="text-[18px] text-zinc-500">
									A Selection Of Verified And Trusted Suppliers
								</h1>
							</div>
						</div>
					</div>

					<div className="mt-10 md:w-[700px] w-[400px] h-[400px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
						<div className="relative h-full">
							<Image
								src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchip-ranking-background.30953618.png&w=3840&q=75"
								alt=""
								fill
								className="object-cover w-[200px] h-[200px]"
							/>
							<div className="absolute bottom-[7.5rem] left-5 w-10 h-10">
								<ChipIcon />
							</div>

							<div className="absolute bottom-20 left-5">
								<h1 className="text-[25px] font-medium">Chip Ranking</h1>
							</div>

							<div className="absolute bottom-4 left-5 max-w-[350px]">
								<h1 className="text-[18px] text-zinc-500">
									Keep Track Of The Best Performing Processors Across Our
									Network
								</h1>
							</div>
						</div>
					</div>
				</div>

				{/* 3rd row */}
				<div className="mt-10 md:w-[1100px] w-[400px] h-[350px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
					<div className="relative h-full">
						<Image
							src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finferences-background.c3d53e80.png&w=3840&q=75"
							alt=""
							fill
							className="object-cover w-[200px] h-[200px]"
						/>
						<div className="absolute bottom-[8rem] left-5 w-10 h-10">
							<Inference />
						</div>

						<div className="absolute bottom-20 left-5">
							<h1 className="text-[25px] font-medium">Inferences</h1>
						</div>

						<div className="absolute bottom-4 left-5 max-w-[350px]">
							<h1 className="text-[18px] text-zinc-500">
								On-Chain Record Of Every Inference <br /> On Io.Net Powered
								Models.
							</h1>
						</div>
					</div>
				</div>
			</div>

			<IdVentures />
		</section>
	);
};

export default Explore;
