"use client";

import ClientOnly from "@/components/providers/clientOnly";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function DichVu() {
	return (
		<ClientOnly>
			<Box component={"main"}>
				<Typography
					sx={{
						mb: 2,
					}}
					variant="h1"
				>
					Dịch Vụ
				</Typography>

				<Card>
					<CardContent>
						<Typography>aaaa</Typography>
					</CardContent>
				</Card>
			</Box>
		</ClientOnly>
	);
}
