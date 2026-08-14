"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const LAYERS = [
    {
        src: "/images/parallax/01.png",
        align: "justify-center",
        range: ["0%", "40%"],
    },
    {
        src: "/images/parallax/02.png",
        align: "justify-end",
        range: ["0%", "26%"],
    },
    {
        src: "/images/parallax/03.png",
        align: "justify-center",
        range: ["0%", "18%"],
    },
    {
        src: "/images/parallax/04.png",
        align: "justify-center",
        range: ["0%", "10%"],
    },
] as const;

const ParallaxLayer = ({
    src,
    align,
    range,
    progress,
    priority,
}: {
    src: string;
    align: string;
    range: [string, string];
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    priority?: boolean;
}) => {
    const y = useTransform(progress, [0, 1], range);

    return (
        <motion.div
            style={{ y }}
            className={`absolute inset-0 flex ${align} pointer-events-none`}
        >
            <Image
                src={src}
                alt=""
                width={5406}
                height={2411}
                priority={priority}
                draggable={false}
                className="h-full w-auto max-w-none select-none"
            />
        </motion.div>
    );
};

export const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden bg-wr-wine"
        >
            {LAYERS.map((layer, index) => (
                <ParallaxLayer
                    key={layer.src}
                    src={layer.src}
                    align={layer.align}
                    range={layer.range as [string, string]}
                    progress={scrollYProgress}
                    priority={index === 0}
                />
            ))}
        </section>
    );
};
