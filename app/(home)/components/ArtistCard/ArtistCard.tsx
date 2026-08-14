"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ARTIST_TYPE_LABEL } from "@/lib/types/artist";
import { ArtistCardProps } from "./types";
import { TAG_STYLE, TYPE_CARD_STYLES } from "./constants";

export const ArtistCard = ({ artist }: ArtistCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => setIsFlipped((flipped) => !flipped);

    return (
        <div id={artist.id} className="w-full perspective-distant">
            <motion.div
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                onClick={toggleFlip}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleFlip();
                    }
                }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                    transformStyle: "preserve-3d",
                    WebkitTransformStyle: "preserve-3d",
                }}
                className="group relative aspect-3/4 w-full cursor-pointer rounded-2xl outline-none "
            >
                <div
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "translateZ(0)",
                        WebkitTransform: "translateZ(0)",
                    }}
                    className={`absolute inset-0 flex flex-col overflow-hidden rounded-sm ${TYPE_CARD_STYLES[artist.type]} `}
                >
                    <div className="h-2/3 w-full border-b border-black/20">
                        <div className="relative h-full w-full overflow-hidden">
                            <Image
                                src={artist.image}
                                alt={artist.name}
                                fill
                                sizes="(width < 768px) 100vw, (width < 1024px) 33vw, 25vw"
                                className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0"
                            />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-between gap-2 px-4 py-4 text-center">
                        <span
                            className={`rounded-full px-2 py-0.5 font-oswald text-[10px] uppercase tracking-widest ${TAG_STYLE} absolute top-2 left-2`}
                        >
                            {ARTIST_TYPE_LABEL[artist.type]}
                        </span>
                        <span className="font-anton text-2xl leading-tight text-white uppercase">
                            {artist.name}
                        </span>
                        <span className="font-oswald text-[11px] tracking-widest text-white/50 uppercase">
                            Click para ver más info
                        </span>
                    </div>
                </div>

                <div
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg) translateZ(0)",
                        WebkitTransform: "rotateY(180deg) translateZ(0)",
                    }}
                    className={`absolute inset-0 overflow-hidden rounded-sm ${TYPE_CARD_STYLES[artist.type]}`}
                >
                    <div
                        className="absolute inset-0 bg-black/15"
                        style={{
                            maskImage: "url(/images/lineup/card-back-02.svg)",
                            WebkitMaskImage:
                                "url(/images/lineup/card-back-02.svg)",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            maskSize: "cover",
                            WebkitMaskSize: "cover",
                        }}
                    />
                    <div className="absolute inset-4 flex flex-col items-center justify-center gap-3 rounded-sm border border-white/10 bg-white/10 px-6 text-center backdrop-blur-sm">
                        <span className="font-anton text-xl text-white uppercase">
                            {artist.name}
                        </span>
                        <p className="font-inter text-sm font-light text-white/90">
                            {artist.description}
                        </p>
                        <span className="font-oswald text-[11px] tracking-widest text-white/60 uppercase">
                            Click para volver
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
