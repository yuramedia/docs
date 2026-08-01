import { Inter } from "next/font/google"
import { Provider } from "@/components/provider"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { baseOptions } from "@/lib/layout.shared"
import { source } from "@/lib/source"
import "./global.css"
import type { Metadata } from "next"

const inter = Inter({
    subsets: ["latin"]
})

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.yuramedia.com")
}

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <html lang="id" className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <Provider>
                    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
                        {children}
                    </DocsLayout>
                </Provider>
            </body>
        </html>
    )
}
