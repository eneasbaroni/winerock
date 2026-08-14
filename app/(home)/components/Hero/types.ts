import { useScroll } from "motion/react";

export type HeroProps = {
    src: string;
    align: string;
    range: [string, string];
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    priority?: boolean;
};
