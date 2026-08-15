import Image from "next/image";
import { LINKS } from "./constants";
import Link from "next/link";
import { HoverRollText } from "../HoverRollText/HoverRollText";

export const Navbar = () => {
    return (
        <nav className="fixed top-2 z-50 flex  w-full items-center justify-center  ">
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
                <div className="flex items-center justify-center gap-6 text-lg tablet:gap-4 mobile:gap-2">
                    {LINKS.map((link) => (
                        <li key={link.href} className="font-anton uppercase">
                            <Link
                                href={link.href}
                                className="group inline-flex items-center"
                            >
                                <HoverRollText>{link.label}</HoverRollText>
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
        </nav>
    );
};
