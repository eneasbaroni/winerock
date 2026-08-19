"use client";

import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/site-config";

const Map = dynamic(() => import("./Map").then((mod) => mod.Map), {
    ssr: false,
});

export const Location = () => {
    const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.event.geo.lat},${siteConfig.event.geo.lng}`;

    return (
        <section
            id="ubicacion"
            className="w-full px-6 py-24 tablet:py-16 mobile:py-10"
        >
            <h2 className="mx-auto mb-4 max-w-6xl text-center font-anton text-4xl uppercase tablet:text-3xl mobile:text-2xl">
                Cómo llegar
            </h2>
            <p className="mx-auto mb-2 max-w-6xl text-center font-anton text-lg text-white uppercase">
                {siteConfig.event.venue}
            </p>
            <p className="mx-auto mb-6 max-w-6xl text-center font-inter text-sm font-light text-white/70">
                {siteConfig.event.address}, {siteConfig.event.locality},{" "}
                {siteConfig.event.region}
            </p>
            <div className="mx-auto mb-8 flex max-w-6xl justify-center">
                <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-wr-orange px-6 py-2 font-oswald text-xs tracking-widest text-white uppercase transition-opacity hover:opacity-80"
                >
                    Ver en Google Maps
                </a>
            </div>
            <div className="mx-auto max-w-6xl">
                <Map />
            </div>
        </section>
    );
};
