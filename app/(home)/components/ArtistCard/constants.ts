import type { CSSProperties } from "react";
import type { Transition } from "motion/react";
import { ArtistType } from "@/lib/types/artist";

export const TYPE_CARD_STYLES: Record<ArtistType, string> = {
    music: "bg-wr-plum",
    gastronomic: "bg-wr-rust",
};

export const TAG_STYLE =
    "border border-white/20 bg-white/10 text-white backdrop-blur-sm";

export const FLIP_TRANSITION: Transition = {
    duration: 0.6,
    ease: "easeInOut",
};

export const PRESERVE_3D_STYLE: CSSProperties = {
    transformStyle: "preserve-3d",
    WebkitTransformStyle: "preserve-3d",
};

export const CARD_BACK_MASK_STYLE: CSSProperties = {
    maskImage: "url(/images/lineup/card-back-02.svg)",
    WebkitMaskImage: "url(/images/lineup/card-back-02.svg)",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "cover",
    WebkitMaskSize: "cover",
};

export const SPRING_CONFIG = { stiffness: 300, damping: 30 };

export const TILT_X_RANGE: [string, string] = ["10deg", "-10deg"];
export const TILT_Y_RANGE: [string, string] = ["-10deg", "10deg"];
export const BACK_LAYER_OFFSET_RANGE: [string, string] = ["-4px", "4px"];
export const FRONT_LAYER_OFFSET_X_RANGE: [string, string] = [
    "-18px",
    "18px",
];
export const FRONT_LAYER_OFFSET_Y_RANGE: [string, string] = [
    "-14px",
    "14px",
];
export const TAG_OFFSET_RANGE: [string, string] = ["-6px", "6px"];

export const BACK_LAYER_Z = -16;
export const FRONT_LAYER_Z = 36;
