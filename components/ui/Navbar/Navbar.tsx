"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS } from "./constants";
import { HoverRollText } from "../HoverRollText/HoverRollText";
import { HamburgerButton } from "./HamburgerButton/HamburgerButton";
import { MobileMenu } from "./MobileMenu/MobileMenu";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleMenu = () => setIsMenuOpen((open) => !open);

    return (
        <>
            <nav
                style={{
                    top: "calc(env(safe-area-inset-top) + 0.5rem)",
                }}
                className="fixed z-50 flex w-full items-center justify-center mobile:px-4"
            >
                <ul className="flex rounded-full bg-wr-rust px-6 py-1 text-lg w-full max-w-6xl text-wr-orange justify-center items-center shadow-lg shadow-wr-orange/5">
                    <li className="mr-auto">
                        <Link href="/">
                            <Image
                                src="/images/logos/logo-min-orange.svg"
                                alt="Wine Rock Logo"
                                className="h-5 w-auto"
                                width={100}
                                height={60}
                            />
                        </Link>
                    </li>
                    <div className="flex items-center justify-center gap-6 text-lg tablet:gap-4 mobile:hidden">
                        {LINKS.map((link) => (
                            <li
                                key={link.href}
                                className="font-anton uppercase"
                            >
                                <Link
                                    href={link.href}
                                    className="group inline-flex items-center"
                                >
                                    <HoverRollText>{link.label}</HoverRollText>
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div className="hidden mobile:block">
                        <HamburgerButton
                            isOpen={isMenuOpen}
                            onToggle={toggleMenu}
                        />
                    </div>
                </ul>
            </nav>
            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
};
