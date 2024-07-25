import React from "react";

const Animation = () => {
	return (
		<div className="flex justify-center items-center md:-mt-[120px]">
			<video
				src="https://io.net/logoFade.mp4"
				width={1280}
				autoPlay
				loop
				muted
				playsInline
			/>
		</div>
	);
};

export default Animation;
