import { useScroll } from "motion/react";

export type ParallaxLayerProps = {
    src: string;
    align: string;
    range: [string, string];
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    onLoad: () => void;
};
