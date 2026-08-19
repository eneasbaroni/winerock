"use client";

import { useEffect, useRef } from "react";
import {
    AttributionControl,
    Map as MapLibreMap,
    Marker,
    NavigationControl,
    setWorkerUrl,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { siteConfig } from "@/lib/site-config";
import { ATTRIBUTION, MAP_STYLE, MAP_ZOOM } from "./constants";

const VENUE_COORDINATES: [number, number] = [
    siteConfig.event.geo.lng,
    siteConfig.event.geo.lat,
];

setWorkerUrl("/maplibre-gl-worker.mjs");

export const Map = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<MapLibreMap | null>(null);

    useEffect(() => {
        if (!containerRef.current || mapRef.current) return;

        const map = new MapLibreMap({
            container: containerRef.current,
            style: MAP_STYLE,
            center: VENUE_COORDINATES,
            zoom: MAP_ZOOM,
            scrollZoom: false,
            attributionControl: false,
        });

        map.addControl(
            new AttributionControl({ customAttribution: ATTRIBUTION }),
        );
        map.addControl(
            new NavigationControl({ showCompass: false }),
            "top-left",
        );

        const markerEl = document.createElement("div");
        markerEl.className =
            "h-4 w-4 rounded-full bg-wr-orange ring-4 ring-wr-orange/30";

        new Marker({ element: markerEl })
            .setLngLat(VENUE_COORDINATES)
            .addTo(map);

        mapRef.current = map;

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="h-96 w-full overflow-hidden rounded-2xl tablet:h-80 mobile:h-64"
        />
    );
};
