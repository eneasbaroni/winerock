"use client";

import { motion } from "motion/react";
import { HamburgerButtonProps } from "./types";
import { CLOSED_PATH, ICON_TRANSITION, OPEN_PATH } from "./constants";

export const HamburgerButton = ({ isOpen, onToggle }: HamburgerButtonProps) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            className="relative z-50 flex h-8 w-8 items-center justify-center text-wr-orange"
        >
            <svg
                width="24"
                height="6"
                viewBox="0 -1 50 13"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    animate={{ d: isOpen ? OPEN_PATH : CLOSED_PATH }}
                    transition={ICON_TRANSITION}
                    strokeWidth="4"
                    stroke="currentColor"
                />
            </svg>
        </button>
    );
};
