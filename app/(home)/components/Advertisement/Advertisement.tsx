import Image from "next/image";

export const Advertisement = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
            <div className="w-full h-full absolute -z-10 top-0 left-0 overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/lineup/card-back-dt-01.svg"
                        alt="Wine Rock Logo"
                        fill
                        className="mobile:hidden object-contain object-center opacity-10"
                    />
                    <Image
                        src="/images/lineup/card-back-02.svg"
                        alt="Wine Rock Logo"
                        fill
                        className="hidden mobile:block object-contain object-center opacity-10"
                    />
                </div>
            </div>
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
