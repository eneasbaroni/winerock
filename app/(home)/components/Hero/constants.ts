export const MOBILE_QUERY = "(width < 768px)";

export const DESKTOP_IMAGE_SIZE = { width: 5406, height: 2411 };
export const MOBILE_IMAGE_SIZE = { width: 2117, height: 2930 };

export const LAYERS = [
    {
        src: "/images/parallax/01.png",
        srcMobile: "/images/parallax/01B.png",
        align: "justify-center",
        alignMobile: "justify-center",
        range: ["0%", "40%"],
        rangeMobile: ["-4%", "10%"],
    },
    {
        src: "/images/parallax/02.png",
        srcMobile: "/images/parallax/02B.png",
        align: "justify-end",
        alignMobile: "justify-center",
        range: ["0%", "15%"],
        rangeMobile: ["0%", "4%"],
    },
    {
        src: "/images/parallax/03.png",
        srcMobile: "/images/parallax/03B.png",
        align: "justify-center",
        alignMobile: "justify-center",
        range: ["0%", "25%"],
        rangeMobile: ["0%", "35%"],
    },
    {
        src: "/images/parallax/04.png",
        srcMobile: "/images/parallax/04B.png",
        align: "justify-center",
        alignMobile: "justify-center",
        range: ["0%", "2%"],
        rangeMobile: ["0%", "1%"],
    },
] as const;
