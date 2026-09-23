import Link from "next/link";

const routes = [
    {
        name: "Terms & Conditions",
        path: "/terms-conditions",
    },
    {
        name: "Privacy Policy",
        path: "/privacy-policy",
    },
];

export default function Footer() {
    return (
        <footer className="flex justify-between items-center mt-auto px-3 sm:px-9 md:px-12 border-white/20 border-t h-10 md:h-14 text-white/50 text-xs md:text-sm">
            <p>&copy; 2077 NighCity. All rights reserved.</p>

            <ul className="flex sm:flex-row flex-col gap-x-3 sm:gap-x-8">
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link href={route.path} className="hover:text-white transition">
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
