import Link from "next/link";

import { SearchEventsForm } from "@/components/home";
import { MainHeading } from "@/components/shared";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-3 pt-36 text-center">
            <MainHeading>Find events around you</MainHeading>
            <p className="opacity-75 mt-7 mb-12 text-lg lg:text-3xl tracking-wide">
                Browse more than{" "}
                <span className="font-bold text-accent underline underline-offset-2 tracking-tighter">
                    10,000
                </span>{" "}
                events around you
            </p>
            <SearchEventsForm />
            <section className="flex gap-x-4 mt-4 text-white text-sm">
                <p className="opacity-90">Popular: </p>
                <div className="space-x-2 opacity-50 underline underline-offset-4">
                    <Link href="/events/austin">Austin</Link>
                    <Link href="/events/seattle">Seattle</Link>
                </div>
            </section>
        </main>
    );
}
