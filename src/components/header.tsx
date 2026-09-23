"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const routes = [
    { name: "home", path: "/" },
    { name: "all events", path: "/events/all" },
];

export default function Header() {
    const activePath = usePathname();

    return (
        <header className="flex justify-between items-center px-3 sm:px-9 border-white/20 border-b h-10 md:h-14 tracking-tight">
            <Logo />

            <nav className="h-full">
                <ul className="flex justify-center gap-2 md:gap-x-4 h-full text-white/70 text-sm capitalize">
                    {routes.map((route) => (
                        <li
                            className={clsx(
                                "relative flex justify-center items-center px-1 h-full hover:text-white transition",
                                {
                                    "text-white": activePath === route.path,
                                },
                            )}
                            key={route.path}
                        >
                            <Link href={route.path}>{route.name}</Link>
                            {activePath === route.path && (
                                <motion.div
                                    layoutId="header-active-link"
                                    className="bottom-0 absolute bg-accent w-full h-1"
                                ></motion.div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
