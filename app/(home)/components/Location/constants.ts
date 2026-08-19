import type { StyleSpecification } from "maplibre-gl";

export const MAP_ZOOM = 13;

const TEXT_COLOR = "#f0e2df";
const TEXT_HALO = "#1c0d10";

export const MAP_STYLE: StyleSpecification = {
    version: 8,
    glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
    sources: {
        openfreemap: {
            type: "vector",
            url: "https://tiles.openfreemap.org/planet",
        },
    },
    layers: [
        {
            id: "background",
            type: "background",
            paint: { "background-color": "#2b1418" },
        },
        {
            id: "water",
            type: "fill",
            source: "openfreemap",
            "source-layer": "water",
            paint: { "fill-color": "#24303a" },
        },
        {
            id: "landuse",
            type: "fill",
            source: "openfreemap",
            "source-layer": "landuse",
            paint: { "fill-color": "#3a1e21" },
        },
        {
            id: "roads",
            type: "line",
            source: "openfreemap",
            "source-layer": "transportation",
            paint: {
                "line-color": "#a08d8a",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    0.5,
                    14,
                    2,
                ],
            },
        },
        {
            id: "roads-major",
            type: "line",
            source: "openfreemap",
            "source-layer": "transportation",
            filter: [
                "in",
                ["get", "class"],
                [
                    "literal",
                    [
                        "motorway",
                        "trunk",
                        "primary",
                        "secondary",
                        "tertiary",
                    ],
                ],
            ],
            paint: {
                "line-color": "#fd4324",
                "line-opacity": 0.55,
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    1,
                    14,
                    3,
                ],
            },
        },
        {
            id: "road-labels",
            type: "symbol",
            source: "openfreemap",
            "source-layer": "transportation_name",
            layout: {
                "symbol-placement": "line",
                "text-field": ["get", "name"],
                "text-font": ["Noto Sans Regular"],
                "text-size": 11,
            },
            paint: {
                "text-color": TEXT_COLOR,
                "text-halo-color": TEXT_HALO,
                "text-halo-width": 1,
            },
        },
        {
            id: "place-labels",
            type: "symbol",
            source: "openfreemap",
            "source-layer": "place",
            filter: [
                "in",
                ["get", "class"],
                ["literal", ["city", "town", "village"]],
            ],
            layout: {
                "text-field": ["get", "name"],
                "text-font": ["Noto Sans Regular"],
                "text-size": 12,
            },
            paint: {
                "text-color": TEXT_COLOR,
                "text-halo-color": TEXT_HALO,
                "text-halo-width": 1.2,
            },
        },
    ],
};

export const ATTRIBUTION =
    '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors © <a href="https://openfreemap.org" target="_blank">OpenFreeMap</a>';
