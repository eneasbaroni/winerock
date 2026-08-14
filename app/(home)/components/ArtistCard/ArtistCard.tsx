"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ARTIST_TYPE_LABEL } from "@/lib/types/artist";
import { ArtistCardProps } from "./types";
import {
    BACK_LAYER_Z,
    CARD_BACK_MASK_STYLE,
    FLIP_TRANSITION,
    FRONT_LAYER_Z,
    PRESERVE_3D_STYLE,
    TAG_STYLE,
    TYPE_CARD_STYLES,
} from "./constants";
import { backfaceHiddenStyle } from "./helpers";
import { useCardTilt } from "./useCardTilt";

export const ArtistCard = ({ artist }: ArtistCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const toggleFlip = () => setIsFlipped((flipped) => !flipped);

    const {
        tiltX,
        tiltY,
        backX,
        backY,
        frontX,
        frontY,
        tagX,
        tagY,
        handlePointerMove,
        handlePointerLeave,
    } = useCardTilt();

    return (
        <div id={artist.id} className="w-full perspective-distant">
            <motion.div
                onMouseMove={handlePointerMove}
                onMouseLeave={handlePointerLeave}
                style={{ rotateX: tiltX, rotateY: tiltY, ...PRESERVE_3D_STYLE }}
                className="aspect-4/5 w-full"
            >
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
                    transition={FLIP_TRANSITION}
                    style={PRESERVE_3D_STYLE}
                    className="group relative h-full w-full cursor-pointer rounded-2xl outline-none transition-shadow duration-300 hover:shadow-md hover:shadow-black/20"
                >
                    <div
                        style={{
                            ...backfaceHiddenStyle("translateZ(0)"),
                            ...PRESERVE_3D_STYLE,
                        }}
                        className={`absolute inset-0 overflow-hidden rounded-sm ${TYPE_CARD_STYLES[artist.type]} `}
                    >
                        <motion.div
                            style={{ x: backX, y: backY, z: BACK_LAYER_Z }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={artist.image}
                                alt={artist.name}
                                fill
                                sizes="(width < 768px) 100vw, (width < 1024px) 33vw, 25vw"
                                className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0"
                            />
                        </motion.div>
                        <motion.span
                            style={{ x: tagX, y: tagY, z: FRONT_LAYER_Z }}
                            className={`absolute top-2 left-2 rounded-full px-2 py-0.5 font-oswald text-[10px] uppercase tracking-widest ${TAG_STYLE}`}
                        >
                            {ARTIST_TYPE_LABEL[artist.type]}
                        </motion.span>
                        <motion.div
                            style={{ x: frontX, y: frontY, z: FRONT_LAYER_Z }}
                            className={`absolute inset-x-6 -bottom-4 flex flex-col items-center gap-1 rounded-t-xl px-4 pt-3 pb-7 text-center ${TYPE_CARD_STYLES[artist.type]}`}
                        >
                            <span className="font-anton text-lg leading-tight text-white uppercase">
                                {artist.name}
                            </span>
                            <span className="font-oswald text-[10px] tracking-widest text-white/60 uppercase">
                                Click para ver más info
                            </span>
                        </motion.div>
                    </div>

                    <div
                        style={backfaceHiddenStyle("rotateY(180deg) translateZ(0)")}
                        className={`absolute inset-0 overflow-hidden rounded-sm ${TYPE_CARD_STYLES[artist.type]}`}
                    >
                        <div
                            className="absolute inset-0 bg-black/15"
                            style={CARD_BACK_MASK_STYLE}
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
            </motion.div>
        </div>
    );
};
