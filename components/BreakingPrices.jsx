"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Pricing from "@assets/pricing.svg";
import Speed from "@assets/speed.svg";
import Scalability from "@assets/scalability.svg";

const items = [
	{
		icon: Pricing,
		text: "Unmatched Price",
		image:
			"https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtopAnim1.79fc5b58.png&w=1920&q=75",
	},
	{
		icon: Speed,
		text: "Unrivaled Speed",
		image:
			"https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtopAnim2.2924dc5d.png&w=1920&q=75",
	},
	{
		icon: Scalability,
		text: "Unmatched Scalability",
		image:
			"https://io.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtopAnim3.ea85f2ae.png&w=1920&q=75",
	},
];

const BreakingPrices = () => {
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
					<h1 className="text-[40px] font-medium">
						Better, Faster and <br />{" "}
						<span className="blur-effect" data-text="Cheaper">
							Cheaper
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

export default BreakingPrices;
