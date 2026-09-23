import { EventsList } from "@/components/events";
import { MainHeading } from "@/components/shared";
import { EVENTS_URL } from "@/lib/constants";
import { EventoEvent } from "@/models/EventoEvent";

type Props = {
    params: Promise<{
        city: string;
    }>;
};

export default async function Page({ params }: Props) {
    const { city } = await params;
    const response = await fetch(`${EVENTS_URL}?city=${city}`);
    const events: EventoEvent[] = await response.json();

    return (
        <main className="px-5 py-24">
            {city === "all" ? (
                <MainHeading>All Events</MainHeading>
            ) : (
                <MainHeading>
                    Events in <span className="capitalize">{city}</span>
                </MainHeading>
            )}

            <EventsList events={events} className="mt-10 lg:mt-28" />
        </main>
    );
}
