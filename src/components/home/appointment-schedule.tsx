import { COLOR_CODE } from "@/theme";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { servicesOptions } from "./services";
import { toast } from "react-hot-toast";

interface AppointmentScheduleProps {}

export const INFO_ID_ELEMENT = "AppointmentSchedule";

const AppointmentSchedule: React.FC<AppointmentScheduleProps> = ({}) => {
	const [serviceSelected, setSetServiceSelected] = React.useState<string>("");

	const handleChange = (event: SelectChangeEvent) => {
		setSetServiceSelected(event.target.value as string);
	};

	return (
		<Box component={"section"} bgcolor={COLOR_CODE.BACKGROUND} py={5}>
			<Typography variant="h2" textAlign={"center"} fontWeight={"bold"} mb={3}>
				Đặt lịch khám & Tư vấn
			</Typography>
			<Container maxWidth="sm">
				<Card
					sx={{
						borderRadius: "24px",
						p: 4,
					}}
				>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField label="Họ & Tên" required fullWidth />
							</Grid>
							<Grid item xs={12}>
								<TextField label="Số điện thoại" required fullWidth />
							</Grid>
							<Grid item xs={12}>
								<TextField label="Email" type="email" fullWidth />
							</Grid>
							<Grid item xs={12}>
								<InputLabel id="select-service-label">Dịch vụ</InputLabel>
								<Select
									labelId="select-service-label"
									id="demo-simple-select"
									value={serviceSelected}
									fullWidth
									onChange={handleChange}
								>
									{servicesOptions.map((item, index) => (
										<MenuItem key={item.value} value={item.value}>
											{item.title}
										</MenuItem>
									))}
								</Select>
							</Grid>
							<Grid item xs={12}>
								<TextField label="Ghi chú" multiline maxRows={3} fullWidth />
							</Grid>
						</Grid>
					</CardContent>
					<CardActions>
						<Button
							color="secondary"
							fullWidth
							onClick={() => {
								toast.success("Đăng ký thành công!");
							}}
						>
							Đăng ký
						</Button>
					</CardActions>
				</Card>
			</Container>
		</Box>
	);
};

export default AppointmentSchedule;
