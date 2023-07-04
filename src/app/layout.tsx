import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Providers from "@/components/providers";
import ClientOnly from "@/components/providers/clientOnly";
import AppThemeProvider from "@/theme/provider";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import "./globals.css";
import { getMetaData } from "@/utils/metaData";

export const metadata = getMetaData({});

export const font = Roboto({
	weight: ["300", "400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head></head>
			<body className={font.className}>
				<NextAppDirEmotionCacheProvider options={{ key: "css" }}>
					<AppThemeProvider>
						<Providers>
							<ClientOnly>
								<Header />

								<Toaster />
							</ClientOnly>
							<div
								style={{
									marginTop: "64px",
								}}
							>
								{children}
							</div>
							<ClientOnly>
								<Footer />
							</ClientOnly>
						</Providers>
					</AppThemeProvider>
				</NextAppDirEmotionCacheProvider>
			</body>
		</html>
	);
}
