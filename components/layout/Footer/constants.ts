import { siteConfig } from "@/lib/site-config";

export const FOOTER_LINK_COLUMNS = [
    {
        title: "Explorá",
        links: [
            { label: "Lineup", href: "#lineup" },
            { label: "Grilla", href: "#grid" },
            { label: "FAQs", href: "#faqs" },
        ],
    },
    {
        title: "Seguinos",
        links: [
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "WhatsApp", href: "#" },
        ],
    },
] as const;

export const FOOTER_CONTACT = {
    title: "Contacto",
    venue: siteConfig.event.venue,
    address: `${siteConfig.event.locality}, ${siteConfig.event.region}`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${siteConfig.event.geo.lat},${siteConfig.event.geo.lng}`,
};

export const FOOTER_BACKGROUND_MASK_STYLE = {
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
} as const;
