import { Metadata } from "next";

export const DOMAIN_PRODUCT = "https://xetnghiemmaudanang.tinspham.dev";

type SafeMetaData = {
	title?: string;
	description?: string;
	url?: string;
};

export const getMetaData = ({
	title = "Xét nghiệm máu đà nẵng - Blood test Danang",
	description = "Xét nghiệm máu đà nẵng - Blood test Danang",
	url = DOMAIN_PRODUCT,
}: SafeMetaData): Metadata => {
	return {
		title: `${title}`,
		description: description,

		twitter: {
			card: "summary_large_image",
			title: `${title}`,
			description: description,
			creator: "@tinspham209",
			images: {
				url: "/cover.jpg",
				alt: `${title}`,
			},
		},
		metadataBase: new URL(url),
		openGraph: {
			title: `${title}`,
			description: description,
			url: DOMAIN_PRODUCT,
			images: "/cover.jpg",
			siteName: `${title}`,
			type: "website",
			locale: "vi_VN",
		},
		themeColor: "#0B2C59",
	};
};
