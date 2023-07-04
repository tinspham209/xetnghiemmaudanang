"use client";

import { useMediaQuery } from "@mui/material";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";
import { mediaBreakpoint } from "@/theme";
type Props = {};
export function Header({}: Props) {
	const isTablet = useMediaQuery(mediaBreakpoint.TABLET);
	return <>{isTablet ? <HeaderMobile /> : <HeaderDesktop />}</>;
}
