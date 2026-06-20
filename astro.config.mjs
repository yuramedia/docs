// @ts-check

import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.yuramedia.com",
	integrations: [
		starlight({
			title: "Yuramedia Docs",
			description:
				"Dokumentasi panduan lokalisasi dan terjemahan resmi Yuramedia Link.",
			defaultLocale: "root",
			locales: {
				root: { label: "Bahasa Indonesia", lang: "id" },
			},
			logo: {
				replacesTitle: true,
				light: "./src/assets/logo.svg",
				dark: "./src/assets/logo-dark.svg",
			},
			favicon: "/favicon.svg",
			lastUpdated: true,
			editLink: {
				baseUrl: "https://github.com/yuramedia/docs/edit/main/",
			},
			customCss: ["./src/styles/custom.css"],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/yuramedia/",
				},
				{
					icon: "facebook",
					label: "Facebook",
					href: "https://www.facebook.com/yuramedialink",
				},
				{
					icon: "instagram",
					label: "Instagram",
					href: "https://www.instagram.com/yuramedialink/",
				},
				{
					icon: "linkedin",
					label: "LinkedIn",
					href: "https://www.linkedin.com/company/yuramedialink",
				},
				{
					icon: "tiktok",
					label: "TikTok",
					href: "https://www.tiktok.com/@yuramedialink",
				},
				{
					icon: "x.com",
					label: "Twitter",
					href: "https://x.com/yuramedialink",
				},
			],
			sidebar: [
				{
					label: "Panduan",
					items: [{ autogenerate: { directory: "guides" } }],
				},
				{
					label: "Referensi",
					items: [{ autogenerate: { directory: "reference" } }],
				},
			],
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
		}),
		sitemap(),
	],
});
