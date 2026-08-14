export type ArtistType = "music" | "gastronomic";

export type ProminenceLevel = 1 | 2 | 3;

export type Artist = {
    id: string;
    name: string;
    image: string;
    description: string;
    type: ArtistType;
    level: ProminenceLevel;
};
