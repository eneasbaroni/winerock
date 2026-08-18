import { Faq } from "@/lib/types/faq";

export type FaqItemProps = {
    faq: Faq;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
};
