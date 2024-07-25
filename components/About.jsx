import Image from "next/image";

const About = () => {
	return (
		<section className="mt-1">
			<div className="flex flex-col justify-center items-center">
				<div className="bg-zinc-800 border border-zinc-500 py-1 px-3 rounded-full text-white">
					<p className="text-center">Who we are</p>
				</div>

				<div className="mt-3">
					<h1 className="md:text-[60px] text-[35px] ">
						Propelling ML Startups
					</h1>
				</div>

				<div className="relative">
					<div className="mt-10 md:w-[1100px] w-[380px] h-[350px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
						<Image
							src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcapital-background.05bbc710.png&w=3840&q=75"
							fill
							className="object-cover w-[200px] h-[200px]"
						/>
					</div>

					<div className="absolute md:top-12 bottom-20 left-5">
						<h1 className="text-[25px] font-medium">
							Disruptive Venture <br /> Capital Investing
						</h1>
					</div>

					<div className="absolute md:top-32 bottom-4 left-5 max-w-[350px]">
						<h1 className="text-[18px] text-zinc-500">
							The world's first venture capital founder friendly firm focused on
							compute power
						</h1>
					</div>
				</div>

				{/* 2nd row */}
				<div className="flex flex-wrap gap-4">
					<div className="mt-10 md:w-[700px] w-[400px] h-[400px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
						<div className="relative h-full">
							<Image
								src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdriving-innovation.e611d796.png&w=2048&q=75"
								alt=""
								fill
								className="object-cover w-[200px] h-[200px]"
							/>

							<div className="absolute bottom-24 left-5">
								<h1 className="text-[25px] font-medium">
									Driving Innovation In <br /> AI/ML Startups
								</h1>
							</div>

							<div className="absolute bottom-4 left-5 max-w-[350px]">
								<h1 className="text-[18px] text-zinc-500">
									Deploying decentralized AI compute to foster the web3 economy
									from the ground-up
								</h1>
							</div>
						</div>
					</div>

					<div className="mt-10 w-[400px] h-[400px] bg-[#000] border border-zinc-500 rounded-[20px] overflow-hidden">
						<div className="relative h-full">
							<Image
								src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGPU-compute-tablet.6a7066e1.png&w=3840&q=75"
								alt=""
								fill
								className="object-cover w-[200px] h-[200px]"
							/>

							<div className="absolute bottom-20 left-5">
								<h1 className="text-[25px] font-medium">
									GPU Compute <br /> Power Access
								</h1>
							</div>

							<div className="absolute bottom-4 left-5 max-w-[350px]">
								<h1 className="text-[18px] text-zinc-500">
									Through unparalleled access to GPU compute power
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
