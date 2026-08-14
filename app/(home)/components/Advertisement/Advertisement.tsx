import Image from "next/image";

export const Advertisement = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold text-center">Vuelve</h2>
            <Image
                src="/images/logos/logo-white.svg"
                alt="logo"
                width={200}
                height={200}
                className="object-contain"
            />
            <h3 className="font-extralight">Pronto mas información</h3>
        </div>
    );
};
