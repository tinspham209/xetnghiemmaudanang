import { COLOR_CODE } from "@/theme";
import {
	Bloodtype,
	Healing,
	LocalPharmacy,
	Medication,
	Vaccines,
} from "@mui/icons-material";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface AboutUsProps {}

export const INFO_ID_ELEMENT = "AboutUs";

const options = [
	{
		title: "Xét nghiệm máu tại nhà",
		description: "",
		icon: <Bloodtype fontSize="large" />,
		url: "/",
	},
	{
		title: "Gói kiểm tra sức khoẻ",
		description: "",
		icon: <LocalPharmacy fontSize="large" />,
		url: "/",
	},
	{
		title: "Gói kiểm tra sức khoẻ hậu COVID",
		description: "",
		icon: <Medication fontSize="large" />,
		url: "/",
	},
	{
		title: "Kiểm tra nhanh COVID tại nhà",
		description: "",
		icon: <Vaccines fontSize="large" />,
		url: "/",
	},
	{
		title: "Xét nghiệm chỉ định thêm",
		description: "",
		icon: <Healing fontSize="large" />,
		url: "/",
	},
];

const AboutUs: React.FC<AboutUsProps> = ({}) => {
	return (
		<Box component={"section"} bgcolor={COLOR_CODE.BACKGROUND} py={5}>
			<Container>
				<Stack
					flexDirection={"row"}
					gap={{
						xs: 0,
						md: "24px",
					}}
				>
					<Stack
						flexBasis={{
							xs: "0%",
							md: "20%",
						}}
						sx={{
							position: "relative",
							width: "100%",
							height: "500px",
						}}
					>
						<Image
							src="/img/about.png"
							alt="about-us"
							fill
							style={{
								objectFit: "contain",
							}}
						/>
					</Stack>
					<Stack
						flexBasis={{
							xs: "100%",
							md: "80%",
						}}
					>
						<Typography variant="h2" fontWeight={"bold"}>
							Về chúng tôi
						</Typography>
						<Typography variant="h4" mt={2} fontWeight={"bold"}>
							Phòng Xét nghiệm Y khoa Kỹ thuật Cao
						</Typography>

						<Box py={3}>
							<Divider />
						</Box>

						<Typography variant="h6">
							Tại phòng Xét nghiệm chúng tôi có điều khiện thuận lợi để phục vụ
							tất cả các bệnh nhân. Phòng Xét nghiệm sở hữu những máy móc tự
							động, chất lượng và là máy móc chính hãng. Bên cạnh đó, chúng tôi
							có một đội ngũ các bác sĩ và kỹ thuật viên tận tụy, chuyên nghiệp,
							công tác tại Bệnh viện Đa khoa Đà Nẵng, cung cấp những kết quả xét
							nghiệm chính xác, đáng tin cậy trong thời gian ngắn nhất.
						</Typography>
						<Box py={3}>
							<Divider />
						</Box>
						<Typography variant="h6">
							Bác sĩ phụ trách Xét nghiệm: <b>CN. Lê Văn Sơn</b>
						</Typography>
						<Box py={3}>
							<Divider />
						</Box>
						<Typography variant="h6">
							Địa chỉ: 92 Hải Phòng, quận Hải Châu, tp Đà Nẵng
						</Typography>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default AboutUs;
