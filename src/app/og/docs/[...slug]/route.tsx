import { getPageImageUrl, source } from "@/lib/source"
import { notFound } from "next/navigation"
import { ImageResponse } from "takumi-js/response"
import { appName } from "@/lib/shared"
import fs from "node:fs"
import path from "node:path"

export const revalidate = false

// Read logo-dark.svg as base64 Data URI for 100% pixel-perfect rendering
const logoPath = path.join(process.cwd(), "public/logo-dark.svg")
const logoSvg = fs.readFileSync(logoPath, "utf8")
const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`

export async function GET(_req: Request, props: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await props.params
    const page = source.getPage(slug.slice(0, -1))
    if (!page) notFound()

    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "60px 80px",
                backgroundColor: "#08090e",
                backgroundImage:
                    "radial-gradient(circle at 85% 20%, rgba(59, 130, 246, 0.25), transparent 50%), radial-gradient(circle at 15% 80%, rgba(139, 92, 246, 0.2), transparent 50%)",
                color: "#ffffff",
                fontFamily: "Geist, sans-serif"
            }}
        >
            {/* Header with Pixel-Perfect Base64 SVG Logo */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logoDataUri} width="220" height="110" alt="Logo" style={{ objectFit: "contain" }} />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 18px",
                        borderRadius: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        color: "#94a3b8",
                        fontSize: "15px",
                        fontWeight: "600"
                    }}
                >
                    {appName}
                </div>
            </div>

            {/* Main Title & Description */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "10px" }}>
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        alignSelf: "flex-start",
                        padding: "6px 14px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(59, 130, 246, 0.15)",
                        border: "1px solid rgba(59, 130, 246, 0.3)",
                        color: "#60a5fa",
                        fontSize: "14px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                    }}
                >
                    Dokumentasi Resmi
                </div>
                <h1
                    style={{
                        fontSize: "54px",
                        fontWeight: "800",
                        letterSpacing: "-1.5px",
                        lineHeight: 1.15,
                        margin: 0,
                        color: "#ffffff"
                    }}
                >
                    {page.data.title}
                </h1>
                {page.data.description && (
                    <p
                        style={{
                            fontSize: "22px",
                            lineHeight: 1.5,
                            color: "#94a3b8",
                            margin: 0,
                            maxHeight: "80px",
                            overflow: "hidden"
                        }}
                    >
                        {page.data.description}
                    </p>
                )}
            </div>

            {/* Footer */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    paddingTop: "24px"
                }}
            >
                <span style={{ fontSize: "16px", color: "#64748b", fontWeight: "500" }}>docs.yuramedia.com</span>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981" }} />
                    <span style={{ fontSize: "15px", color: "#94a3b8", fontWeight: "500" }}>Yuramedia Link</span>
                </div>
            </div>
        </div>,
        {
            width: 1200,
            height: 630,
            format: "webp"
        }
    )
}

export function generateStaticParams() {
    return source.getPages().map((page) => ({
        lang: page.locale,
        slug: getPageImageUrl(page).segments
    }))
}
