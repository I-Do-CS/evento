import Image from "next/image";
import Link from "next/link";

import logoImag from "@/assets/images/evento.png";
import { DIMENSIONS } from "@/lib/constants";

export default function Logo() {
    const { width, height } = DIMENSIONS.logo;

    return (
        <Link href="/" className="flex items-center min-h-full">
            <Image src={logoImag} alt="evento logo" width={width} height={height} />
        </Link>
    );
}
