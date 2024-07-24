"use client";

import navLinks from "@constants/navLinks";
import Link from "next/link";
import { useState } from "react";
import {
	AlignRight,
	ChevronDown,
	ChevronUp,
	ExternalLink,
	X,
} from "lucide-react";
import GetStartedButton from "./GetStartedButton";
import Logo from "@assets/logo.svg";

const Navbar = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [dropdownContent, setDropdownContent] = useState([]);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

	const handleMouseEnter = (index, content) => {
		setHoveredIndex(index);
		setDropdownContent(content);
		setIsDropdownVisible(true);
	};

	const handleMouseLeave = () => {
		if (!isDropdownVisible) {
			setHoveredIndex(null);
		}
	};

	const handleDropdownMouseEnter = () => {
		setIsDropdownVisible(true);
	};

	const handleDropdownMouseLeave = () => {
		setIsDropdownVisible(false);
		setHoveredIndex(null);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="flex flex-row justify-between items-center sticky top-0 z-[100] h-[68px]">
			<div className="hidden md:flex flex-row gap-6 ml-12 text-[16px] relative">
				{navLinks.map((link, index) => (
					<div
						key={index}
						className="relative"
						onMouseEnter={() => handleMouseEnter(index, link.dropdown)}
						onMouseLeave={handleMouseLeave}
					>
						<Link href={link.path}>
							<div className="flex gap-2 items-center">
								<p className="text-sm">{link.name}</p>
								{hoveredIndex === index && link.icon.type === ChevronDown ? (
									<ChevronUp size={16} />
								) : (
									link.icon
								)}
							</div>
						</Link>
					</div>
				))}
				{(hoveredIndex !== null || isDropdownVisible) && (
					<ul
						className="absolute top-full left-0 bg-[#141414cb] text-white shadow-lg rounded-md px-3 mt-4 w-[20rem] py-2"
						onMouseEnter={handleDropdownMouseEnter}
						onMouseLeave={handleDropdownMouseLeave}
					>
						{dropdownContent.map((item, idx) => (
							<li
								key={idx}
								className="p-2 hover:bg-black flex items-center gap-2"
							>
								<div className="bg-[#2b2929cb] px-2 py-1 h-7 rounded-md border border-[#817f7f]">
									<span className="mt-1">{item.icon}</span>
								</div>
								<div className="grid">
									{item.text && <div className="text-[14px]">{item.text}</div>}
									{item.subtext && (
										<span className="text-[13px] text-gray-400">
											{item.subtext}
										</span>
									)}
								</div>
							</li>
						))}
					</ul>
				)}
			</div>

			<div className="ml-10 md:ml-[20rem]">
				<Link href="/">
					<Logo />
				</Link>
			</div>

			<div className="flex items-center gap-4 ml-auto">
				<GetStartedButton />
				<button className="md:hidden mr-2" onClick={toggleMobileMenu}>
					{isMobileMenuOpen ? <X size={35} /> : <AlignRight size={35} />}
				</button>
			</div>

			{isMobileMenuOpen && (
				<div className="md:hidden fixed inset-0 z-[200] bg-[#2e2d2d] overflow-y-auto">
					<div className="flex flex-col h-full p-4">
						<div className="flex justify-between items-center mb-8">
							<Logo className="" />
							<button onClick={toggleMobileMenu}>
								<X size={35} />
							</button>
						</div>
						<ul className="flex flex-col gap-4">
							{navLinks.map((link, index) => (
								<li key={index}>
									<div
										className={`flex items-center justify-between cursor-pointer `}
										onClick={() => {
											if (link.dropdown) {
												setOpenMobileDropdown(
													openMobileDropdown === index ? null : index
												);
											}
										}}
									>
										<span className="text-lg text-white">{link.name}</span>
										{link.externalLink ? (
											<ExternalLink size={24} />
										) : (
											link.dropdown &&
											(openMobileDropdown === index ? (
												<ChevronUp size={24} />
											) : (
												<ChevronDown size={24} />
											))
										)}
									</div>
									{link.dropdown && openMobileDropdown === index && (
										<ul className="mt-2 ml-4">
											{link.dropdown.map((item, idx) => (
												<li key={idx} className="py-2">
													<Link href={item.path || "#"}>
														<div className="flex items-center gap-2 text-white">
															<div className="flex gap-2">
																<div className="text-md">{item.text}</div>

																<div className="mt-1">{item.subicon}</div>
																<div className="-mt-1 -ml-1">
																	{item.subicon2}
																</div>
															</div>
														</div>
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
