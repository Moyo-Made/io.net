import { MoveRight } from "lucide-react";

const GetStartedButton = () => {
	return (
		<div className="relative group">
			<button className="bg-white text-black text-[15px] font-medium px-3 py-2 rounded-md md:mr-24 flex items-center transition-all duration-200 ease-out">
				<span className="transition-all duration-200 ease-out ml-2">
					Get Started
				</span>
				<MoveRight
					className="transition-all duration-200 ease-out transform scale-0 group-hover:scale-100 group-hover:ml-2"
					size={16}
				/>
			</button>
		</div>
	);
};

export default GetStartedButton;
