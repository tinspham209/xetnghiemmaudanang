"use client";

import {
	AboutUs,
	AppointmentSchedule,
	Hero,
	Services,
} from "@/components/home";

import ClientOnly from "@/components/providers/clientOnly";
import { Box } from "@mui/material";

export default function Home() {
	return (
		<ClientOnly>
			<Box component="main">
				<Hero />
				<Services />
				<AboutUs />
				<AppointmentSchedule />
			</Box>
		</ClientOnly>
	);
}
