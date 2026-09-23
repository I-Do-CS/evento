import Image from "next/image";
import Link from "next/link";

import placholderImage from "@/assets/images/event-placeholder-image.jpg";
import { USE_PLACEHOLDER_IMAGE } from "@/lib/constants";
import { EventoEvent } from "@/models/EventoEvent";

type Props = {
    event: EventoEvent;
};

export default function EventCard({ event }: Props) {
    const date = {
        day: new Date(event.date).toLocaleDateString("en-US", { day: "2-digit" }),
        month: new Date(event.date).toLocaleDateString("en-US", { month: "short" }),
    };

    return (
        <Link className="flex-1 max-w-125 min-h-95 basis-80" href={"/event/" + event.slug}>
            <section className="relative flex flex-col bg-white/3 rounded-xl text-white/75 hover:scale-105 active:scale-[102%]">
                <Image
                    className="rounded-t-xl overflow-hidden"
                    src={USE_PLACEHOLDER_IMAGE ? placholderImage : event.imageUrl}
                    alt={event.name}
                    loading={USE_PLACEHOLDER_IMAGE ? "eager" : "lazy"}
                />
                <div className="flex flex-col justify-center items-center py-4">
                    <h2 className="font-semibold text-white text-2xl">{event.name}</h2>
                    <p className="mt-2 text-white/60 italic">By {event.organizerName}</p>
                    <p className="mt-4 text-white/35 text-sm">{event.location}</p>
                </div>
                <section className="top-3 left-3 absolute flex flex-col justify-center items-center bg-black/30 rounded-md w-11.25 h-11.25">
                    <p className="-mb-1 font-bold text-xl">{date.day}</p>
                    <p className="text-accent text-xs uppercase">{date.month}</p>
                </section>
            </section>
        </Link>
    );
}
