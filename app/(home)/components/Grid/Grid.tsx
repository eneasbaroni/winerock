import { artists } from "@/lib/artists";
import { ArtistCard } from "../ArtistCard/ArtistCard";

export const Grid = () => {
    return (
        <section
            id="grid"
            className="w-full px-6 py-24 tablet:py-16 mobile:py-10 mobile:mt-20"
        >
            <h2 className="mx-auto mb-12 max-w-6xl text-center font-anton text-4xl uppercase tablet:mb-8 tablet:text-3xl mobile:mb-6 mobile:text-2xl">
                Artistas y experiencias
            </h2>
            <div className="mx-auto grid max-w-6xl grid-cols-4 gap-2 tablet:grid-cols-3 mobile:grid-cols-1">
                {artists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                ))}
            </div>
        </section>
    );
};
