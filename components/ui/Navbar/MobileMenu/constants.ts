import { Easing } from "motion/react";

export const CURTAIN_VARIANTS = {
    initial: { y: "-100%", borderRadius: "0 0 30% 30%" },
    animate: { y: "0%", borderRadius: "0 0 0% 0%" },
    exit: { y: "-100%", borderRadius: "0 0 30% 30%" },
} as const;

export const CURTAIN_TRANSITION = {
    duration: 1,
    ease: [0.76, 0, 0.24, 1] as Easing,
} as const;

export const BACKGROUND_VARIANTS = {
    initial: { opacity: 0, scale: 1.15, rotate: -6 },
    animate: { opacity: 0.12, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 1.15, rotate: -6 },
} as const;

export const BACKGROUND_TRANSITION = {
    duration: 1.2,
    delay: 0.15,
    ease: [0.76, 0, 0.24, 1] as Easing,
} as const;
