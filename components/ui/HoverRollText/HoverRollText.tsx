import { HoverRollTextProps } from "./types";

export const HoverRollText = ({ children }: HoverRollTextProps) => {
    return (
        <span className="relative inline-block overflow-hidden leading-none">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                {children}
            </span>
            <span
                aria-hidden="true"
                className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
            >
                {children}
            </span>
        </span>
    );
};
