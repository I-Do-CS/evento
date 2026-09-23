import Image from "next/image";

import logoImag from "@/assets/images/evento.png";
import { DIMENSIONS } from "@/lib/constants";

export default function Logo() {
    const { width, height } = DIMENSIONS.logo;

    return <Image src={logoImag} alt="evento logo" width={width} height={height} />;
}
