import Image from "next/image";
import { Advertisement, Hero } from "./components";

export default function Home() {
    return (
        <div>
            <Hero />
            <Advertisement />
        </div>
    );
}
