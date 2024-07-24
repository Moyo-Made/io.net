import React from "react";
import Table from "./Table";

const DemandAccess = () => {
	return (
		<section>
			<div className="flex md:flex-row flex-col justify-center gap-28 md:mt-20 mt-10">
				<div className="flex flex-col gap-5 md:ml-1 ml-5">
					<h1 className="md:text-[40px] text-[30px] font-medium">
						On-Demand GPU <br /> Access
					</h1>
					<span className="text-zinc-500 text-[17px] md:text-[20px]">
						Instant and Permissionless access to the internet <br />
						of GPUs with Industry Breaking Prices
					</span>
				</div>

				<div className="md:mt-0 -mt-16">
					<Table />
				</div>
			</div>
		</section>
	);
};

export default DemandAccess;
