import DevelopIcon from "@assets/develop.svg";
import GetStartedButton from "./GetStartedButton";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="hero-section">
		
			<div className="flex flex-col justify-center items-center">
				<div className="bg-zinc-800 rounded-full border border-zinc-500 md:mt-48 px-3 py-1 shadow-black">
					<div className="flex gap-2 items-center">
						<DevelopIcon className="w-5 h-5" />
						<p>Developed for Large - Scale AI Startups</p>
					</div>
				</div>

				<div className="text-center mt-10">
					<p className="md:text-6xl text-3xl font-semibold md:leading-[5rem] leading-[3rem]">
						The Internet of GPUs <br /> is Finally Here
					</p>
				</div>

				<div className="relative mt-7 flex flex-col items-center">
					<div className="relative">
						<div className="md:ml-24">
							<GetStartedButton />
						</div>
						<div className="absolute bottom-[-50px] left-[35%] w-[2px] h-[50px] bg-[#ffffff3d]"></div>
						<div className="absolute bottom-[-50px] left-[42.5%] w-[2px] h-[50px] bg-[#ffffff3d]"></div>
						<div className="absolute bottom-[-50px] left-[50%] w-[2px] h-[50px] bg-[#ffffff3d]"></div>
						<div className="absolute bottom-[-50px] left-[57.5%] w-[2px] h-[50px] bg-[#ffffff3d]"></div>
						<div className="absolute bottom-[-50px] left-[65%] w-[2px] h-[50px] bg-[#ffffff3d]"></div>
					</div>

					<div className="relative mt-12 flex justify-center items-center">
						<div className="absolute inset-0 bg-[#ffffffe5] blur-[8px] rounded-lg"></div>
						<Image
							src="https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprocesor.ac8e9c45.png&w=256&q=75"
							alt=""
							width={200}
							height={250}
							priority={true}
							className="relative z-10"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
