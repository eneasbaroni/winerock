import { Advertisement, Hero, Lineup } from "./components";
import { siteConfig } from "@/lib/site-config";

const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: siteConfig.event.name,
    startDate: siteConfig.event.startDate,
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
    organizer: siteConfig.event.organizers.map((name) => ({
        "@type": "Organization",
        name,
    })),
    performer: siteConfig.event.lineup.map((name) => ({
        "@type": "MusicGroup",
        name,
    })),
};

export default function Home() {
    return (
        <div>
            <Lineup />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(eventJsonLd),
                }}
            />
            <Hero />
            <Advertisement />
        </div>
    );
}
