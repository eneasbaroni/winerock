"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import {
    FOOTER_BACKGROUND_MASK_STYLE,
    FOOTER_CONTACT,
    FOOTER_LINK_COLUMNS,
} from "./constants";

export const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-60%", "1%"]);
    const backgroundYMobile = useTransform(
        scrollYProgress,
        [0, 1],
        ["-40%", "20%"],
    );

    return (
        <footer
            ref={footerRef}
            className="relative w-full overflow-hidden bg-linear-to-b from-wr-wine to-wr-orange px-6 pt-20 pb-46 tablet:pt-16 tablet:pb-32 mobile:pt-12 mobile:pb-24"
        >
            <div className="relative z-20 mx-auto grid max-w-6xl grid-cols-3 gap-10 mobile:grid-cols-1 mobile:gap-10">
                {FOOTER_LINK_COLUMNS.map((column) => (
                    <div key={column.title}>
                        <p className="mb-4 font-oswald text-xs tracking-widest text-white/60 uppercase">
                            {column.title}
                        </p>
                        <ul className="flex flex-col gap-2">
                            {column.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className=" text-lg text-white/80 uppercase transition-colors hover:text-white/70"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <p className="mb-4 font-oswald text-xs tracking-widest text-white/60 uppercase">
                        {FOOTER_CONTACT.title}
                    </p>
                    <p className="font-inter text-lg text-white/80 uppercase">
                        {FOOTER_CONTACT.venue}
                    </p>
                    <p className="font-inter text-sm font-light text-white/80">
                        {FOOTER_CONTACT.address}
                    </p>
                </div>
            </div>

            <motion.div
                className="absolute inset-x-0 bottom-0 z-10 aspect-1615/192 w-full bg-wr-wine mobile:hidden"
                style={{
                    y: backgroundY,
                    maskImage: "url(/images/footer/bg.svg)",
                    WebkitMaskImage: "url(/images/footer/bg.svg)",
                    ...FOOTER_BACKGROUND_MASK_STYLE,
                }}
            />
            <motion.div
                className="absolute inset-x-0 bottom-0 z-10 hidden aspect-[807.66/253] w-full bg-wr-wine mobile:block"
                style={{
                    y: backgroundYMobile,
                    maskImage: "url(/images/footer/bg-mobile.svg)",
                    WebkitMaskImage: "url(/images/footer/bg-mobile.svg)",
                    ...FOOTER_BACKGROUND_MASK_STYLE,
                }}
            />
        </footer>
    );
};
