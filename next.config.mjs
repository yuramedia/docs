import { createMDX } from "fumadocs-mdx/next"
import remarkDirective from "remark-directive"
import { remarkDirectiveAdmonition, remarkSteps } from "fumadocs-core/mdx-plugins"

const withMDX = createMDX({
    mdxOptions: {
        remarkPlugins: [remarkDirective, remarkDirectiveAdmonition, remarkSteps]
    }
})

/** @type {import('next').NextConfig} */
const config = {
    serverExternalPackages: ["@takumi-rs/core"],
    output: "export",
    images: {
        unoptimized: true
    },
    reactStrictMode: true
}

export default withMDX(config)
