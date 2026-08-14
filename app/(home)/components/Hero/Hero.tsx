"use client";

import { useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import { LAYERS } from "./constants";
import { Loader } from "@/components";
import { ParallaxLayer } from "./ParallaxLayer";

export const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [loadedCount, setLoadedCount] = useState(0);
    const isReady = loadedCount >= LAYERS.length;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden bg-wr-wine"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isReady ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
            >
                {LAYERS.map((layer) => (
                    <ParallaxLayer
                        key={layer.src}
                        src={layer.src}
                        srcMobile={layer.srcMobile}
                        align={layer.align}
                        range={layer.range as [string, string]}
                        rangeMobile={layer.rangeMobile as [string, string]}
                        progress={scrollYProgress}
                        onLoad={() => setLoadedCount((count) => count + 1)}
                    />
                ))}
            </motion.div>

            {!isReady && <Loader />}
        </section>
    );
};
