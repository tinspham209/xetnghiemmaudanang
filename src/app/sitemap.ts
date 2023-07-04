import { ROUTE_LIST } from "@/components/header/routes";
import { DOMAIN_PRODUCT } from "@/utils/metaData";

export default function sitemap() {
	const siteMapRoutes = ROUTE_LIST.map((route) => ({
		url: `${DOMAIN_PRODUCT}${route.path}`,
		lastModified: new Date(),
	}));

	return [...siteMapRoutes];
}
