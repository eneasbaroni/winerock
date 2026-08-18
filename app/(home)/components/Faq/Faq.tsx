"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";
import { FaqItem } from "./FaqItem";

export const Faq = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section
            id="faqs"
            className="w-full px-6 py-24 tablet:py-16 mobile:py-10"
        >
            <h2 className="mx-auto mb-12 max-w-6xl text-center font-anton text-4xl uppercase tablet:mb-8 tablet:text-3xl mobile:mb-6 mobile:text-2xl">
                Preguntas frecuentes
            </h2>
            <div className="mx-auto flex max-w-3xl flex-col gap-3">
                {faqs.map((faq, index) => (
                    <FaqItem
                        key={faq.id}
                        faq={faq}
                        index={index}
                        isOpen={openId === faq.id}
                        onToggle={() =>
                            setOpenId((current) =>
                                current === faq.id ? null : faq.id,
                            )
                        }
                    />
                ))}
            </div>
        </section>
    );
};
