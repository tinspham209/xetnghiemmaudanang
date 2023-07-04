import { COLOR_CODE } from "@/theme";
import { Box, Container, Grid, Typography } from "@mui/material";
interface HeroProps {
	bgImg: string;
	title: string;
	description: string;
	bgColor?: string;
}

export const INFO_ID_ELEMENT = "hero";

const Hero = ({
	bgImg,
	title,
	description,
	bgColor = COLOR_CODE.PRIMARY,
}: HeroProps) => {
	return (
		<Box component={"section"} bgcolor={bgColor} pb={3}>
			<Box
				sx={{
					minHeight: "45vh",
					position: "relative",
					mb: 3,
					"&:before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundImage: `url(${bgImg})`,

						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",

						backgroundColor: "rgba(0,0,0,0.5)",
					},
				}}
			/>
			<Container>
				<Grid container spacing={2} alignItems={"flex-end"}>
					<Grid item xs={12} md={6}>
						<Typography variant="h1" fontWeight={"bold"} color="secondary.main">
							{title}
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="body1" fontWeight={"bold"} color="white">
							{description}
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;
