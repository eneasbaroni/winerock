import { ArtistType, ProminenceLevel } from "@/lib/types/artist";

export const LEVEL_ORDER: ProminenceLevel[] = [3, 2, 1];

export const LEVEL_STYLES: Record<ProminenceLevel, string> = {
    3: "text-7xl tablet:text-6xl mobile:text-4xl font-bold",
    2: "text-4xl tablet:text-3xl mobile:text-2xl font-bold",
    1: "text-xl tablet:text-lg mobile:text-base font-medium",
};

export const TYPE_STYLES: Record<ArtistType, string> = {
    music: "text-white",
    gastronomic: "text-wr-orange",
};
