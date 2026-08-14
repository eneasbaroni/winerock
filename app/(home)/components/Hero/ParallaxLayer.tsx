import { motion, useTransform } from "motion/react";
import { ParallaxLayerProps } from "./types";
import { DESKTOP_IMAGE_SIZE, MOBILE_IMAGE_SIZE, MOBILE_QUERY } from "./constants";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Image from "next/image";
import Lenis from "lenis";
import { useEffect } from "react";

export const ParallaxLayer = ({
    src,
    srcMobile,
    align,
    alignMobile,
    range,
    rangeMobile,
    progress,
    onLoad,
}: ParallaxLayerProps) => {
    const isMobile = useMediaQuery(MOBILE_QUERY);
    const y = useTransform(progress, [0, 1], isMobile ? rangeMobile : range);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    if (isMobile === undefined) return null;

    const { width, height } = isMobile ? MOBILE_IMAGE_SIZE : DESKTOP_IMAGE_SIZE;

    return (
        <motion.div
            style={{ y }}
            className={`absolute inset-0 flex ${isMobile ? alignMobile : align} pointer-events-none`}
        >
            <Image
                src={isMobile ? srcMobile : src}
                alt=""
                width={width}
                height={height}
                priority
                draggable={false}
                onLoad={onLoad}
                onError={onLoad}
                className="h-full w-auto max-w-none select-none"
            />
        </motion.div>
    );
};
