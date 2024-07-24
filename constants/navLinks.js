import {
	ChevronDown,
	ExternalLink,
	MessageSquareWarning,
	UsersRound,
	FileQuestion,
	BookImage,
	Phone,
} from "lucide-react";
import Cloud  from "@assets/cloud.svg";
import Worker from "@assets/worker.svg";
import Explorer from "@assets/explorer.svg";

const navLinks = [
	{
		name: "Product",
		path: "/product",
		icon: <ChevronDown size={16} />,
		dropdown: [
			{ text: <Cloud />,
				subicon2: <ExternalLink size={16} />,
			 },
			{ text: <Worker />,
				subicon2: <ExternalLink size={16} />,
			},
			{ text: <Explorer />,
				subicon2: <ExternalLink size={16} />,
			},
		],
	},
	{
		name: "Company",
		path: "/company",
		icon: <ChevronDown size={16} />,
		dropdown: [
			{
				text: "About Us",
				subtext: "Get to know io Better",
				icon: <MessageSquareWarning size={20} />,
			},
			{
				text: "Team and Investors",
				subtext: "Team, Investors, and Advisors",
				icon: <UsersRound size={16} />,
			},
			{
				text: "FAQs",
				subtext: "Frequently Asked Questions",
				icon: <FileQuestion size={16} />,
			},
			{
				text: "Media Kits",
				subtext: "Media, Branding and guidelines",
				icon: <BookImage size={16} />,
			},
			{
				text: "Contact Us",
				subicon: <ExternalLink size={16} />,
				subtext: "We'd love to hear from you",
				icon: <Phone size={16} />,
			},
		],
	},
	{
		name: "Docs",
		path: "/docs",
		icon: <ExternalLink size={16} />,
		externalLink: true,
		dropdown: [],
	},
];

export default navLinks;
