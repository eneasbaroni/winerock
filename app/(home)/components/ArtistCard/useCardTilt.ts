"use client";

import { useMotionValue, useSpring, useTransform } from "motion/react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import {
    BACK_LAYER_OFFSET_RANGE,
    FRONT_LAYER_OFFSET_X_RANGE,
    FRONT_LAYER_OFFSET_Y_RANGE,
    MOBILE_QUERY,
    SPRING_CONFIG,
    TAG_OFFSET_RANGE,
    TILT_X_RANGE,
    TILT_Y_RANGE,
} from "./constants";

export const useCardTilt = () => {
    const isMobile = useMediaQuery(MOBILE_QUERY) === true;

    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);

    const tiltX = useSpring(
        useTransform(pointerY, [-0.5, 0.5], TILT_X_RANGE),
        SPRING_CONFIG,
    );
    const tiltY = useSpring(
        useTransform(pointerX, [-0.5, 0.5], TILT_Y_RANGE),
        SPRING_CONFIG,
    );

    const backX = useSpring(
        useTransform(pointerX, [-0.5, 0.5], BACK_LAYER_OFFSET_RANGE),
        SPRING_CONFIG,
    );
    const backY = useSpring(
        useTransform(pointerY, [-0.5, 0.5], BACK_LAYER_OFFSET_RANGE),
        SPRING_CONFIG,
    );

    const frontX = useSpring(
        useTransform(pointerX, [-0.5, 0.5], FRONT_LAYER_OFFSET_X_RANGE),
        SPRING_CONFIG,
    );
    const frontY = useSpring(
        useTransform(pointerY, [-0.5, 0.5], FRONT_LAYER_OFFSET_Y_RANGE),
        SPRING_CONFIG,
    );

    const tagX = useSpring(
        useTransform(pointerX, [-0.5, 0.5], TAG_OFFSET_RANGE),
        SPRING_CONFIG,
    );
    const tagY = useSpring(
        useTransform(pointerY, [-0.5, 0.5], TAG_OFFSET_RANGE),
        SPRING_CONFIG,
    );

    const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
        if (isMobile) return;

        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
    };

    const handlePointerLeave = () => {
        pointerX.set(0);
        pointerY.set(0);
    };

    return {
        tiltX,
        tiltY,
        backX,
        backY,
        frontX,
        frontY,
        tagX,
        tagY,
        handlePointerMove,
        handlePointerLeave,
    };
};
