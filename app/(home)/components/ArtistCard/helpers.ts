import type { CSSProperties } from "react";

export const backfaceHiddenStyle = (transform: string): CSSProperties => ({
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform,
    WebkitTransform: transform,
});
