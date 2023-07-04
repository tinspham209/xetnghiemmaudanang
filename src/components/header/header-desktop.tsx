import { COLOR_CODE } from "@/theme";
import { Box, Container, Link as MuiLink, Stack } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LogoOnly } from "../icons";
import { ROUTE_LIST } from "./routes";

type Props = {};

export function HeaderDesktop({}: Props) {
	const pathname = usePathname();

	const routeList = React.useMemo(() => {
		return ROUTE_LIST;
	}, []);

	return (
		<Box
			component={"header"}
			py={1}
			sx={{
				position: "fixed",
				top: 0,
				width: "100%",
				zIndex: 99,
				backgroundColor: `${COLOR_CODE.WHITE}`,
				borderBottom: `1px solid ${COLOR_CODE.BORDER}`,
				backdropFilter: "blur(20px)",
			}}
		>
			<Container>
				<Stack
					direction="row"
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Link href={"/"} passHref>
						<LogoOnly width={48} height={48} />
					</Link>
					<Box>
						{routeList.map((route, index) => (
							<MuiLink
								sx={{
									ml: 2,
									fontWeight: "bold",
									fontSize: 16,
									textTransform: "uppercase",
									"&:hover": {
										color: "primary.main",
									},
								}}
								key={`${route.path}-${index}`}
								href={route.path}
								component={Link}
								underline="none"
								className={clsx({ active: pathname === route.path })}
							>
								{route.label}
							</MuiLink>
						))}
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}
