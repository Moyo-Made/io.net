import React from "react";
import ProfitTable from "./ProfitTable";

const Profits = () => {
	return (
		<section>
			<div className="flex md:flex-row flex-col justify-center gap-28 md:mt-20 mt-10">
				<div className="flex flex-col gap-5 md:ml-1 ml-5 mt-10">
					<h1 className="md:text-[40px] text-[30px] font-medium">
						Skyrocketing Profits On <br /> Your Infrastructure
					</h1>
					<span className="text-zinc-500 text-[17px] md:text-[20px]">
						Earn unprecedented profits on your <br />
						GPUs and CPUs
					</span>
				</div>

				<div className="md:mt-0 -mt-16">
					<ProfitTable />
				</div>
			</div>
		</section>
	);
};

export default Profits;
