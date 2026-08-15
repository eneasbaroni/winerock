import { Easing } from "motion/react";

export const CLOSED_PATH = "M 0 1 L 50 1 Z M 0 10 L 50 10 z";
export const OPEN_PATH = "M 0 1 L 50 10 Z M 0 10 L 50 1 z";

export const ICON_TRANSITION = {
    duration: 1,
    ease: [0.76, 0, 0.24, 1] as Easing,
} as const;
