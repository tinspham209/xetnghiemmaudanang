"use client";

import { COLOR_CODE } from "@/theme";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import {
	Box,
	Container,
	Divider,
	Grid,
	Link as MuiLink,
	Stack,
	Typography,
} from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ROUTE_LIST } from "../header/routes";
import { LogoOnly } from "../icons";
interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	const pathname = usePathname();
	return (
		<Box>
			<Divider />
			<Box component={"footer"} bgcolor={COLOR_CODE.WHITE} pt={4} pb={3}>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<Stack
								flexDirection={"column"}
								justifyContent={"space-between"}
								height="100%"
								pb={2}
							>
								<LogoOnly width={48} height={48} />

								<Box
									sx={{
										mt: {
											xs: 3,
											md: 0,
										},
									}}
								>
									{[
										{
											label: `Địa chỉ: 92 Hải Phòng, quận Hải Châu, tp Đà Nẵng`,
										},
										{
											label: `Điện thoại: 0914.088.406`,
										},
										{
											label: `Zalo: 0914.088.406`,
										},
									].map((item) => (
										<Typography variant="body1" key={item.label} mb={1}>
											{item.label}
										</Typography>
									))}
								</Box>
							</Stack>
						</Grid>
						<Grid item xs={12} md={4}>
							<Stack flexDirection={"column"}>
								{ROUTE_LIST.map((route) => (
									<MuiLink
										sx={{
											mb: 1,
											fontWeight: "bold",
											fontSize: 16,
											textTransform: "uppercase",
											"&:hover": {
												color: "primary.main",
											},
										}}
										key={`${route.path}`}
										href={route.path}
										component={Link}
										underline="none"
										className={clsx({ active: pathname === route.path })}
									>
										{route.label}
									</MuiLink>
								))}
							</Stack>
						</Grid>
						<Grid item xs={12} md={2}>
							<Stack
								flexDirection={"row"}
								sx={{
									"& svg": {
										color: COLOR_CODE.SECONDARY,
										cursor: "pointer",

										"&:hover": {
											color: COLOR_CODE.PRIMARY,
										},
									},
								}}
							>
								<Facebook
									fontSize="large"
									sx={{
										mr: 2,
									}}
								/>
								<Instagram
									fontSize="large"
									sx={{
										mr: 2,
									}}
								/>
								<YouTube fontSize="large" />
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
