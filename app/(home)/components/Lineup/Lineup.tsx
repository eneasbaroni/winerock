"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { artists } from "@/lib/artists";
import { LEVEL_ORDER, LEVEL_STYLES, TYPE_STYLES } from "./constants";
import Image from "next/image";

export const Lineup = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    return (
        <section
            id="lineup"
            ref={sectionRef}
            className="w-full relative px-6 py-24 tablet:py-16 mobile:py-10 mobile:min-h-screen mobile:flex mobile:flex-col mobile:justify-center"
        >
            <div className="w-full h-full absolute -z-10 top-0 left-0 overflow-hidden">
                <motion.div
                    style={{ y: backgroundY }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/images/lineup/card-back-dt-01.svg"
                        alt="Wine Rock Logo"
                        fill
                        className="mobile:hidden object-contain object-center opacity-10"
                    />
                    <Image
                        src="/images/lineup/card-back-02.svg"
                        alt="Wine Rock Logo"
                        fill
                        className="hidden mobile:block object-contain object-center opacity-10"
                    />
                </motion.div>
            </div>
            <Image
                src="/images/logos/logo-white.svg"
                alt="Wine Rock Logo"
                width={400}
                height={400}
                className="h-15 w-auto tablet:h-10 mobile:h-8 mx-auto mb-12 tablet:mb-8 mobile:mb-6 z-20"
            />
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center font-anton uppercase z-20">
                {LEVEL_ORDER.map((level) => {
                    const levelArtists = artists.filter(
                        (artist) => artist.level === level,
                    );

                    if (levelArtists.length === 0) return null;

                    return (
                        <p key={level} className={LEVEL_STYLES[level]}>
                            {levelArtists.map((artist, index) => (
                                <span key={artist.id}>
                                    <a
                                        href={`#${artist.id}`}
                                        className={`${TYPE_STYLES[artist.type]} mobile:pointer-events-none transition-opacity hover:opacity-70`}
                                    >
                                        {artist.name}
                                    </a>
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
