/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	experimental: {
		// Required:
		appDir: true,
	},
};

module.exports = nextConfig;
