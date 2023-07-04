import { COLOR_CODE } from "@/theme";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface HeroProps {}

export const INFO_ID_ELEMENT = "hero";

const Hero: React.FC<HeroProps> = ({}) => {
	return (
		<Box component={"section"} bgcolor={COLOR_CODE.BACKGROUND} py={4}>
			<Container>
				<Grid
					container
					spacing={3}
					flexDirection={{
						xs: "column-reverse",
						md: "row",
					}}
				>
					<Grid item xs={12} md={6}>
						<Stack
							flexDirection={"column"}
							justifyContent={"center"}
							sx={{
								height: "100%",
							}}
						>
							<Typography variant="h2" fontWeight={"bold"}>
								Phòng Xét nghiệm
								<br /> Y Khoa
								<br /> Kỹ thuật cao
							</Typography>
							<Typography variant="h6" fontWeight={"bold"} mt={3}>
								Chuyên cung cấp những kết quả xét nghiệm chính xác, đáng tin cậy
								trong thời gian ngắn.
							</Typography>
							<Typography variant="h6" mt={3}>
								Địa chỉ: 92 Hải Phòng, quận Hải Châu, tp Đà Nẵng
							</Typography>

							<Stack flexDirection={"row"} mt={3}>
								<Link href="/lien-he">
									<Button
										color="secondary"
										sx={{
											width: "fit-content",
										}}
									>
										Đặt lịch ngay
									</Button>
								</Link>
								<Link href="/dich-vu">
									<Button
										color="primary"
										variant="text"
										sx={{
											ml: 3,
											width: "fit-content",
										}}
									>
										Dịch vụ
									</Button>
								</Link>
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								position: "relative",
								width: "100%",
								height: {
									xs: "50vh",
									md: "90vh",
								},
							}}
						>
							<Image
								src={"/img/hero.png"}
								alt="hero"
								fill
								style={{ objectFit: "contain" }}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;
