import { Advertisement } from "./components";
import { siteConfig } from "@/lib/site-config";

const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: siteConfig.event.name,
    startDate: siteConfig.event.startDate,
    endDate: siteConfig.event.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
        "@type": "Place",
        name: siteConfig.event.venue,
        address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.event.locality,
            addressRegion: siteConfig.event.region,
            addressCountry: siteConfig.event.country,
        },
    },
    image: [`${siteConfig.url}${siteConfig.ogImage}`],
    description: siteConfig.description,
    organizer: siteConfig.event.organizers.map((organizer) => ({
        "@type": "Organization",
        name: organizer.name,
        url: organizer.url,
    })),
    performer: siteConfig.event.lineup.map((name) => ({
        "@type": "MusicGroup",
        name,
    })),
    offers: {
        "@type": "Offer",
        url: siteConfig.event.ticketsUrl,
        availability: "https://schema.org/PreOrder",
    },
};

export default function Home() {
    return (
        <div>
            {/* <Lineup /> */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(eventJsonLd),
                }}
            />
            {/* <Hero />
            <Grid /> */}
            <Advertisement />
        </div>
    );
}
