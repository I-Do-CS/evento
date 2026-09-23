import { cn } from "@/lib/utils";
import { EventoEvent } from "@/models/EventoEvent";

import EventCard from "./event-card";

type Props = {
    events: EventoEvent[];
    className?: string;
};

export default function EventsList({ events, className }: Props) {
    return (
        <section className={cn("flex flex-wrap justify-center gap-10 px-12 max-w-full", className)}>
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
}
