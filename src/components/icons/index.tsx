"use client";

import Image from "next/image";

type LogoProps = {
	width: number;
	height: number;
};

export const LogoOnly = ({ height, width }: LogoProps) => {
	return (
		<Image src={"/logo/logo.webp"} alt="logo" width={width} height={height} />
	);
};
