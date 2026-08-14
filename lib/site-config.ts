export const siteConfig = {
    name: "Wine Rock Sessions",
    title: "Wine Rock Sessions 2026 | Música, vino y montaña en Mendoza",
    description:
        "Wine Rock Sessions vuelve a Lomas del Malbec, Luján de Cuyo, el sábado 28 de marzo de 2026: música en vivo a los pies de la cordillera, feria de vinos y experiencias gastronómicas.",
    url: "https://winerock.vercel.app",
    ogImage: "/images/logos/logo.png",
    keywords: [
        "Wine Rock Sessions",
        "Wine Rock Mendoza",
        "festival de música Mendoza",
        "vino y música",
        "Lomas del Malbec",
        "Luján de Cuyo",
        "festival de vino Argentina",
    ],
    event: {
        name: "Wine Rock Sessions 2026",
        startDate: "2026-03-28",
        venue: "Lomas del Malbec",
        locality: "Luján de Cuyo",
        region: "Mendoza",
        country: "AR",
        organizers: ["En Vivo Producciones", "Produce Crack Mendoza"],
        lineup: ["Ratones Paranoicos", "Catupecu Machu", "Estelares"],
    },
} as const;
