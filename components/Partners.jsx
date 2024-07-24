import Image from "next/image";

const Partners = () => {
	return (
		<section className="md:mt-16 mt-12">
			<div className="flex flex-col justify-center gap-10">
				<div>
					<h1 className="md:text-[50px] text-[35px] font-semibold text-center">
						Our Partners
					</h1>
				</div>

				<div className="flex md:flex-row flex-col justify-center items-center md:border-t border-b border-zinc-600 md:gap-28 gap-16 md:py-5 py-3">
					<Image
						src="https://io.net/_next/static/media/aethir.1cdcd1bd.svg"
						width={100}
						height={100}
						className=""
					/>
					<Image
						src="https://io.net/_next/static/media/solana-with-gradient.06622186.svg"
						width={100}
						height={100}
					/>
					<Image
						src="https://io.net/_next/static/media/aptos.a3a18d29.svg"
						width={100}
						height={100}
					/>
					<Image
						src="https://io.net/_next/static/media/the-render-network.b6c7b2c0.svg"
						width={120}
						height={120}
					/>
					<Image
						src="https://io.net/_next/static/media/file-coin.5e490e29.svg"
						width={100}
						height={100}
					/>
				</div>
			</div>
		</section>
	);
};

export default Partners;
