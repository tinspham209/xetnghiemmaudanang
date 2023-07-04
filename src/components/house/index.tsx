"use client";

import React from "react";
import { Grid, Box } from "@mui/material";
import HouseItem from "./house-item";
interface HousesProps {
	projects: {
		img: string;
		title: string;
		description: string;
		url: string;
	}[];
}

const Houses: React.FC<HousesProps> = ({ projects }) => {
	return (
		<Box>
			<Grid container spacing={2}>
				{projects.map((project, index) => (
					<Grid key={`${project.title}-${index}`} item xs={12} md={4}>
						<HouseItem project={project} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Houses;
