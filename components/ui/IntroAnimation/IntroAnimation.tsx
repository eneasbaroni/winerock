"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    FADE_TRANSITION,
    SUN_PATH,
    SUN_TRANSITION,
    WASH_TRANSITION,
} from "./constants";

export const IntroAnimation = () => {
    const [stage, setStage] = useState<"growing" | "fading" | "done">(
        "growing",
    );

    if (stage === "done") return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: stage === "fading" ? 0 : 1 }}
            transition={FADE_TRANSITION}
            onAnimationComplete={() => {
                if (stage === "fading") setStage("done");
            }}
            className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-wr-wine"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={WASH_TRANSITION}
                className="absolute inset-0 bg-wr-orange"
            />
            <motion.svg
                viewBox="0 0 1161.25 1200"
                initial={{ scale: 0.2, rotate: 0 }}
                animate={{ scale: 3.4, rotate: 140 }}
                transition={SUN_TRANSITION}
                onAnimationComplete={() => setStage("fading")}
                style={{ willChange: "transform" }}
                className="relative aspect-1161.25/1200 w-[45vmax] fill-wr-orange"
            >
                <path d={SUN_PATH} />
            </motion.svg>
        </motion.div>
    );
};
