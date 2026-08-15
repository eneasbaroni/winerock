"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HoverRollText } from "../../HoverRollText/HoverRollText";
import { LINKS } from "../constants";
import { MobileMenuProps } from "./types";
import {
    BACKGROUND_TRANSITION,
    BACKGROUND_VARIANTS,
    CURTAIN_TRANSITION,
    CURTAIN_VARIANTS,
} from "./constants";

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    return (
        <motion.div
            variants={CURTAIN_VARIANTS}
            initial="initial"
            animate={isOpen ? "animate" : "exit"}
            transition={CURTAIN_TRANSITION}
            aria-hidden={!isOpen}
            className="fixed inset-0 z-40 flex h-svh w-full flex-col items-center justify-center gap-8 overflow-hidden bg-wr-rust"
        >
            <motion.div
                variants={BACKGROUND_VARIANTS}
                initial="initial"
                animate={isOpen ? "animate" : "exit"}
                transition={BACKGROUND_TRANSITION}
                className="absolute inset-0"
            >
                <Image
                    src="/images/lineup/card-back-02.svg"
                    alt=""
                    fill
                    className="object-contain object-center"
                />
            </motion.div>
            <ul className="relative flex flex-col items-center gap-2">
                {LINKS.map((link) => (
                    <li
                        key={link.href}
                        className="font-anton text-3xl uppercase"
                    >
                        <Link
                            href={link.href}
                            onClick={onClose}
                            className="group inline-flex items-center text-wr-orange"
                        >
                            <HoverRollText>{link.label}</HoverRollText>
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};
