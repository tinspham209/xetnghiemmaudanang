import { COLOR_CODE } from "@/theme";
import {
	Add,
	Bloodtype,
	Healing,
	LocalPharmacy,
	Medication,
	Vaccines,
} from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

interface ServicesProps {}

export const INFO_ID_ELEMENT = "services";

export const servicesOptions = [
	{
		title: "Xét nghiệm theo yêu cầu",
		value: "xet-nghiem-theo-cau",
		description: "",
		icon: <Bloodtype fontSize="large" />,
		url: "/",
	},
	{
		title: "Xét nghiệm tổng quát",
		value: "xet-nghiem-tong-quat",
		description: "",
		icon: <LocalPharmacy fontSize="large" />,
		url: "/",
	},
	{
		title: "Xét nghiệm tầm soát ung thư",
		value: "xet-nghiem-tam-soat-ung-thu",
		description: "",
		icon: <Medication fontSize="large" />,
		url: "/",
	},
	{
		title: "Xét nghiệm Beta HCG, nhận biết mang thai sớm",
		value: "xet-nghiem-beta-hcg",
		description: "",
		icon: <Vaccines fontSize="large" />,
		url: "/",
	},
	{
		title: "Xét nghiệm máu tại nhà",
		value: "xet-nghiem-mau-tai-nha",
		description: "",
		icon: <Bloodtype fontSize="large" />,
		url: "/",
	},
	{
		title: "Gói kiểm tra sức khoẻ",
		value: "goi-kiem-tra-suc-khoe",
		description: "",
		icon: <LocalPharmacy fontSize="large" />,
		url: "/",
	},
	{
		title: "Gói kiểm tra sức khoẻ hậu COVID",
		value: "goi-kiem-tra-suc-khoe-hau-covid",
		description: "",
		icon: <Medication fontSize="large" />,
		url: "/",
	},
	{
		title: "Kiểm tra nhanh COVID tại nhà",
		value: "kiem-tra-nhanh-covid-tai-nha",
		description: "",
		icon: <Vaccines fontSize="large" />,
		url: "/",
	},
	{
		title: "Xét nghiệm khác",
		value: "xet-nghiem-khac",
		description: "",
		icon: <Healing fontSize="large" />,
		url: "/",
	},
];

const Services: React.FC<ServicesProps> = ({}) => {
	return (
		<Box component={"section"} bgcolor={COLOR_CODE.BACKGROUND} py={5}>
			<Container>
				<Typography variant="h2" fontWeight={"bold"} mb={4}>
					Dịch vụ
				</Typography>
				<Grid container spacing={3}>
					{servicesOptions.map((item, index) => (
						<Grid item xs={12} md={4} key={`${item.title}-${index}`}>
							<Card
								sx={{
									borderRadius: "24px",
									transition: "all 0.2s ease-in",
									"&:hover": {
										backgroundColor: "secondary.main",

										"& svg, & h4, & button": {
											color: "white",
										},
									},
								}}
							>
								<CardContent>
									<Box
										sx={{
											"& svg": {
												color: "secondary.main",
												fontSize: "48px !important",
											},
										}}
									>
										{item.icon}
									</Box>
									<Typography
										variant="h4"
										mt={3}
										sx={{
											display: "-webkit-box",
											lineHeight: "36px",
											height: "72px",
											WebkitBoxOrient: "vertical",
											WebkitLineClamp: 2,
										}}
									>
										{item.title}
									</Typography>
								</CardContent>
								<CardActions>
									<Stack
										flexDirection={"row"}
										justifyContent={"space-between"}
										alignItems={"center"}
										width={"100%"}
									>
										<Link href="/lien-he">
											<IconButton>
												<Add fontSize="large" />
											</IconButton>
										</Link>
										<Link href={item.url}>
											<Button color="secondary" variant="text">
												Tìm Hiểu Thêm
											</Button>
										</Link>
									</Stack>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;
