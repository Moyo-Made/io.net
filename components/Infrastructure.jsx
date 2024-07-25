"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Earning from "@assets/earnings.svg";
import Rates from "@assets/rate.svg";
import Premium from "@assets/premium.svg";

const items = [
	{
		icon: Earning,
		text: "Maxed Earnings",
		image:
			"https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbottomAnim1.bcf29fb0.png&w=3840&q=75",
	},
	{
		icon: Rates,
		text: "High Utilization Rates",
		image:
			"https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbottomAnim2.2f8a25ba.png&w=3840&q=75",
	},
	{
		icon: Premium,
		text: "Premium Support",
		image:
			"https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbottomAnim3.1c0630cc.png&w=3840&q=75",
	},
];

const Infrastructure = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState("down");

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => {
				if (prevIndex === items.length - 1) {
					setDirection("up");
					return prevIndex - 1;
				} else if (prevIndex === 0 && direction === "up") {
					setDirection("down");
					return prevIndex + 1;
				} else {
					return direction === "down" ? prevIndex + 1 : prevIndex - 1;
				}
			});
		}, 2000);

		return () => clearInterval(interval);
	}, [direction]);

	const currentItem = items[currentIndex];

	return (
		<section className="md:mt-28 mt-16">
			<div className="relative flex justify-start items-center">
				<div className="z-10 flex flex-col gap-4 md:ml-20 ml-5">
					<div className="flex gap-2">
						<span className="border-l-2 border-white"></span>
						<currentItem.icon
							className={`w-8 h-8 transition-all duration-500 ${
								direction === "down" ? "animate-slide-down" : "animate-slide-up"
							}`}
						/>
						<span
							className={`mt-2 transition-all duration-500 ${
								direction === "down" ? "animate-slide-down" : "animate-slide-up"
							}`}
						>
							{currentItem.text}
						</span>
					</div>
					<h1 className="md:text-[40px] text-[30px] font-medium">
						Capitalize Your <br />
						<span className="blur-effect" data-text="Infrastructure">
							Infrastructure
						</span>
					</h1>
					<span className="text-[18px] text-zinc-500">
						Industry Breaking Prices
					</span>
				</div>

				<div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:mr-36">
					<Image
						src={currentItem.image}
						alt=""
						width={1150}
						height={500}
						className={`transition-all duration-500 ${
							direction === "down" ? "animate-slide-down" : "animate-slide-up"
						}`}
					/>
				</div>
			</div>
		</section>
	);
};

export default Infrastructure;
