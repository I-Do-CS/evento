import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-3 pt-36 text-center">
            <h1 className="font-bold text-3xl lg:text-6xl tracking-tight">
                Find events around you
            </h1>
            <p className="opacity-75 mt-7 mb-12 text-lg lg:text-3xl tracking-wide">
                Browse more than{" "}
                <span className="font-bold text-accent underline underline-offset-2 tracking-tighter">
                    10,000
                </span>{" "}
                events around you
            </p>

            <form className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
                <input
                    className="bg-white/7 focus:bg-white/10 px-6 rounded-lg outline-none ring-accent/50 focus:ring-2 w-full h-16 text-xs lg:text-sm transition"
                    type="text"
                    placeholder="Search events in any city..."
                    spellCheck={false}
                />
            </form>

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
