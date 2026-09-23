"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchEventsForm() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const router = useRouter();

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!searchTerm.trim()) return;

        router.push(`/events/${searchTerm}`);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]"
        >
            <input
                className="bg-white/7 focus:bg-white/10 px-6 rounded-lg outline-none ring-accent/50 focus:ring-2 w-full h-16 text-xs lg:text-sm transition"
                onChange={handleInputChange}
                value={searchTerm}
                type="text"
                placeholder="Search events in any city..."
                spellCheck={false}
            />
        </form>
    );
}
