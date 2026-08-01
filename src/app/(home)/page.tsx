import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center flex-1 py-16 px-4 text-center">
            <div className="flex items-center gap-3 mb-6">
                <Image
                    src="/logo.svg"
                    alt="Yuramedia Link Logo"
                    width={48}
                    height={48}
                    className="dark:hidden w-12 h-12"
                />
                <Image
                    src="/logo-dark.svg"
                    alt="Yuramedia Link Logo"
                    width={48}
                    height={48}
                    className="hidden dark:block w-12 h-12"
                />
                <h1 className="text-4xl font-extrabold tracking-tight">Yuramedia Docs</h1>
            </div>
            <p className="text-xl text-fd-muted-foreground max-w-2xl mb-8">
                Dokumentasi panduan lokalisasi dan terjemahan resmi Yuramedia Link.
            </p>
            <div className="flex flex-row gap-4">
                <Link
                    href="/docs"
                    className="px-6 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                    Buka Dokumentasi
                </Link>
                <a
                    href="https://github.com/yuramedia/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-lg border border-fd-border font-medium hover:bg-fd-accent transition-colors"
                >
                    GitHub
                </a>
            </div>
        </div>
    )
}
