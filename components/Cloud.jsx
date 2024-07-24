import CloudImage from "@assets/cloud.svg";
import Image from "next/image";
import Universe from "@assets/universe.png";
import Clusters from "@assets/clusters.svg";
import StreamLine from "@assets/streamline.svg";
import Deployment from "./Deployment";

const Cloud = () => {
	return (
		<section className="flex flex-col justify-center items-center mt-28 mb-10">
			<div className="bg-zinc-800 border border-zinc-500 py-2 px-3 rounded-full">
				<CloudImage size={50} />
			</div>
			<div className="mt-8 text-center">
				<h1 className="md:text-6xl ">
					The Power of Global GPU Resources <br />
					<span className="blur-effect" data-text="with a Single Click">
						with a Single Click
					</span>
				</h1>
			</div>

			<div className="flex justify-center gap-8 mt-14 w-full">
				<div className="w-[450px] h-[500px] bg-zinc-900 border border-zinc-500 rounded-[20px] overflow-hidden">
					<div className="relative h-full">
						<Image
							src={Universe}
							alt="Universe"
							fill
							className="object-cover"
						/>
						<div className="absolute bottom-[7.5rem] left-5 w-10 h-10">
							<Clusters />
						</div>

						<div className="absolute bottom-20 left-5">
							<h1 className="text-[25px] font-medium">
								Decentralized Clusters
							</h1>
						</div>

						<div className="absolute bottom-4 left-5 max-w-[350px]">
							<h1 className="text-[18px] text-zinc-500">
								Deploy On A Decentralized Physical Infrastructure Network.
								DePIN*
							</h1>
						</div>
					</div>
				</div>

				<div className="w-[700px] h-[500px] bg-zinc-900 border border-zinc-500 rounded-[20px] overflow-hidden">
					<div className="relative h-full">
						<Image
							src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstreamlined-cluster-deployment-background.0426a525.png&w=3840&q=75"
							alt=""
							fill
							className=""
						/>
						<div className="absolute bottom-[10rem] left-5 w-10 h-10">
							<StreamLine />
						</div>

						<div className="absolute bottom-20 left-5">
							<h1 className="text-[25px] font-medium">
								Streamlined
								<br /> Cluster Deployment
							</h1>
						</div>

						<div className="absolute bottom-4 left-5 max-w-[350px]">
							<h1 className="text-[18px] text-zinc-500">
								Frictionless Cluster Deployment For Your ML Workloads
							</h1>
						</div>
					</div>
				</div>
			</div>

			<Deployment />
		</section>
	);
};

export default Cloud;
