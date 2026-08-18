"use client";

import { AnimatePresence, motion } from "motion/react";
import { FaqItemProps } from "./types";
import {
    ANSWER_TRANSITION,
    ENTRANCE_STAGGER,
    ENTRANCE_TRANSITION,
    ICON_TRANSITION,
} from "./constants";

export const FaqItem = ({ faq, index, isOpen, onToggle }: FaqItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    ...ENTRANCE_TRANSITION,
                    delay: index * ENTRANCE_STAGGER,
                },
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
            className={`overflow-hidden rounded-2xl transition-colors duration-400 ease-in-out hover:brightness-110 ${
                isOpen ? "bg-wr-orange" : "bg-wr-rust"
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left"
            >
                <span className="font-oswald text-sm text-white/60">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-anton text-lg text-white uppercase mobile:text-base">
                    {faq.question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={ICON_TRANSITION}
                    className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wr-wine"
                >
                    <span className="absolute h-0.5 w-3.5 bg-white" />
                    <span className="absolute h-3.5 w-0.5 bg-white" />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={ANSWER_TRANSITION}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 pl-16 font-inter text-sm font-light text-white/90">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
