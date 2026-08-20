import type { Metadata, Viewport } from "next";
import { Inter, Oswald, Anton } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import { Navbar, Footer, IntroAnimation, SmoothScroll } from "@/components";

const oswald = Oswald({
    subsets: ["latin"],
    variable: "--font-oswald",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const anton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    weight: "400",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "es_AR",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="es"
            className={`${oswald.variable} ${inter.variable} ${anton.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <SmoothScroll />
                <IntroAnimation />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
