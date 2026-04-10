// @ts-check

import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.yuramedia.com",
	integrations: [
		starlight({
			title: "Docs",
			logo: {
				// src: './src/assets/logo.svg',
				replacesTitle: true,
				light: "./src/assets/logo.svg",
				dark: "./src/assets/logo-dark.svg",
			},
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
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Panduan Terjemahan Serial Pendek - Cina ke Indonesia",
							slug: "guides/panduan-terjemahan-serial-pendek-cina-ke-indonesia",
						},
					],
				},
				{
					label: "Referensi",
					autogenerate: { directory: "reference" },
				},
			],
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
		}),
		sitemap(),
	],
});
