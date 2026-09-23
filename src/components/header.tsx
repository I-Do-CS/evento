import Link from "next/link";
import Logo from "./logo";

const routes = [
    { name: "home", path: "/" },
    { name: "all events", path: "/events/all" },
];

export default function Header() {
    return (
        <header className="flex justify-between items-center px-3 sm:px-9 border-white/20 border-b h-14">
            <Logo />

            <nav>
                <ul className="flex gap-x-6 text-white/70 text-sm capitalize">
                    {routes.map((route) => (
                        <li key={route.path} className="hover:text-white transition">
                            <Link href={route.path}>{route.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
