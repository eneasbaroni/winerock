import { useScroll } from "motion/react";

export type ParallaxLayerProps = {
    src: string;
    srcMobile: string;
    align: string;
    alignMobile: string;
    range: [string, string];
    rangeMobile: [string, string];
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    onLoad: () => void;
};
