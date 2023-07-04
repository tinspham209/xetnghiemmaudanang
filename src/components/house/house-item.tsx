"use client";

import React from "react";
import { Grid, Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { COLOR_CODE } from "@/theme";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";
interface HouseItemProps {
	project: {
		img: string;
		title: string;
		description: string;
		url: string;
	};
}

const HouseItem: React.FC<HouseItemProps> = ({ project }) => {
	return (
		<Box>
			<MuiLink
				href={project.url}
				component={Link}
				sx={{
					position: "relative",
					"&::before": {
						content: '""',
						display: "block",
						position: "relative",
						paddingTop: "56.25%",
					},
				}}
			>
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage: `url(${project.img})`,
						backgroundColor: `${COLOR_CODE.BACKGROUND}`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "50%",
						backgroundSize: "cover",
						zIndex: 1,
						borderRadius: "8px 8px 0 0",
					}}
				></Box>
			</MuiLink>
			<Typography
				variant="h6"
				sx={{
					fontWeight: "bold",
					color: "secondary.main",
					my: 2,
					height: 56,
					display: "-webkit-box",
					overflow: "hidden",
					lineHeight: "26px",
					WebkitBoxOrient: "vertical",
					WebkitLineClamp: 2,
				}}
			>
				{project.title}
			</Typography>
			<Typography
				variant="body1"
				sx={{
					color: "white",
					mb: 3,
					height: 62,
					display: "-webkit-box",
					overflow: "hidden",
					lineHeight: "21px",
					WebkitBoxOrient: "vertical",
					WebkitLineClamp: 3,
				}}
			>
				{project.description}
			</Typography>

			<MuiLink
				component={Link}
				href={project.url}
				sx={{
					"& svg": {
						color: "secondary.main",
					},
				}}
			>
				<ArrowRight width="64px" height="64px" />
			</MuiLink>
		</Box>
	);
};

export default HouseItem;
