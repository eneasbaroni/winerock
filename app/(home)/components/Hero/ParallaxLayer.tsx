import { motion, useTransform } from "motion/react";
import { ParallaxLayerProps } from "./types";
import Image from "next/image";
import Lenis from "lenis";
import { useEffect } from "react";

export const ParallaxLayer = ({
    src,
    align,
    range,
    progress,
    onLoad,
}: ParallaxLayerProps) => {
    const y = useTransform(progress, [0, 1], range);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

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
                priority
                draggable={false}
                onLoad={onLoad}
                onError={onLoad}
                className="h-full w-auto max-w-none select-none"
            />
        </motion.div>
    );
};
