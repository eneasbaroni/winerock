import { artists } from "@/lib/artists";
import { ArtistCard } from "../ArtistCard/ArtistCard";

export const Grid = () => {
    return (
        <section className="w-full px-6 py-24 tablet:py-16 mobile:py-10">
            <div className="mx-auto grid max-w-6xl grid-cols-4 gap-2 tablet:grid-cols-3 mobile:grid-cols-1">
                {artists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                ))}
            </div>
        </section>
    );
};
