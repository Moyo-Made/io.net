const GridItem = ({ icon, title, description }) => (
	<div className="border-r md:border-b border-zinc-800 md:p-6 p-4">
		<div className="md:grid flex justify-center mb-1">{icon}</div>

		<div className="justify-center items-center gap-4 mb-2">
			<h3 className="text-lg font-semibold">{title}</h3>
		</div>
		<div className="flex justify-center">
			<p className="md:w-auto w-[250px] text-center text-sm text-zinc-400">
				{description}
			</p>
		</div>
	</div>
);

export default GridItem;
