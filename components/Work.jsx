import Worker from "@assets/worker.svg";
import Image from "next/image";
import Computer from "@assets/connect.svg";
import Service from "@assets/service.png";
import Sol from "@assets/sol.png";
import ConnectIcon from "@assets/connect-service.svg";
import SolIcon from "@assets/sol-icon.svg";

const Work = () => {
	return (
		<section className="md:mt-16 mt-9">
			<div className="flex flex-col justify-center items-center">
				<div className="bg-zinc-800 border border-zinc-500 py-2 px-3 rounded-full">
					<Worker size={50} />
				</div>

				<div className="mt-10">
					<h1 className="md:text-[45px] text-[26px] font-medium text-center">
						Put Your GPU To Work
						<br />
						<span
							className="blur-effect"
							data-text="And Accelrate Your Earnings"
						>
							And Accelrate Your Earnings
						</span>
					</h1>
				</div>

				<div className="mt-10 md:w-[1100px] w-[400px] h-[350px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
					<div className="relative h-full">
						<Image
							src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconnect-monitor-and-earn-background.f625b197.png&w=3840&q=75"
							alt=""
							fill
							className="object-cover w-[200px] h-[200px]"
						/>
						<div className="absolute bottom-[10rem] left-5 w-10 h-10">
							<Computer />
						</div>

						<div className="absolute bottom-20 left-5">
							<h1 className="text-[25px] font-medium">
								Connect, Monitor and <br />
								Earn on your Worker
							</h1>
						</div>

						<div className="absolute bottom-4 left-5 max-w-[350px]">
							<h1 className="text-[18px] text-zinc-500">
								Turn your GPU Into a Money-Making <br />
								Machine With Io.Net
							</h1>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap gap-4">
					<div className="mt-10 md:w-[700px] w-[400px] h-[400px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
						<div className="relative h-full">
							<Image
								src={Service}
								alt=""
								fill
								className="object-cover w-[200px] h-[200px]"
							/>
							<div className="absolute bottom-[7.5rem] left-5 w-10 h-10">
								<ConnectIcon />
							</div>

							<div className="absolute bottom-20 left-5">
								<h1 className="text-[25px] font-medium">
									Connect a Multitude of Services
								</h1>
							</div>

							<div className="absolute bottom-4 left-5 max-w-[350px]">
								<h1 className="text-[18px] text-zinc-500">
									Download More Images, Unlock More <br />
									Services And Increase Your Hire Rate
								</h1>
							</div>
						</div>
					</div>

					<div className="mt-10 w-[400px] h-[400px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
						<div className="relative h-full">
							<Image
								src={Sol}
								alt=""
								fill
								className="object-cover w-[200px] h-[200px]"
							/>
							<div className="absolute bottom-[7.5rem] left-5 w-10 h-10">
								<SolIcon />
							</div>

							<div className="absolute bottom-20 left-5">
								<h1 className="text-[25px] font-medium">Earn With Solana</h1>
							</div>

							<div className="absolute bottom-4 left-5 max-w-[350px]">
								<h1 className="text-[18px] text-zinc-500">
									Receive Your Earnings Swiftly On <br />
									Solana Chain
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
