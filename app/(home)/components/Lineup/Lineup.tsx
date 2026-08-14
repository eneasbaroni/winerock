import { artists } from "@/lib/artists";
import { LEVEL_ORDER, LEVEL_STYLES, TYPE_STYLES } from "./constants";

export const Lineup = () => {
    return (
        <section className="w-full px-6 py-24 tablet:py-16 mobile:py-10 mobile:min-h-screen mobile:flex mobile:items-center">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center font-anton uppercase">
                {LEVEL_ORDER.map((level) => {
                    const levelArtists = artists.filter(
                        (artist) => artist.level === level,
                    );

                    if (levelArtists.length === 0) return null;

                    return (
                        <p key={level} className={LEVEL_STYLES[level]}>
                            {levelArtists.map((artist, index) => (
                                <span key={artist.id}>
                                    <span className={TYPE_STYLES[artist.type]}>
                                        {artist.name}
                                    </span>
                                    {index < levelArtists.length - 1 && (
                                        <span className="text-white/40">
                                            {" "}
                                            •{" "}
                                        </span>
                                    )}
                                </span>
                            ))}
                        </p>
                    );
                })}
            </div>
        </section>
    );
};
