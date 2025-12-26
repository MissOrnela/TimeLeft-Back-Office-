import { EventTimeLeft } from "@/lib/type";
import { getAllEvents } from "./actions";
import Filter from "./ui/Filter";
import Sort from "./ui/Sort";
import Pagination from "./ui/Pagination";
import EventsTable from "./ui/EventsTable";

type Props = {
  searchParams: {
    filter?: string;
    sort?: keyof EventTimeLeft;
    order?: "asc" | "desc";
    page?: string;
  };
};

export default async function EventsPage({ searchParams }: Props) {
  //first getting all events available
  const eventsList: EventTimeLeft[] = await getAllEvents();
  if (eventsList.length === 0) return <div> no events available</div>;

  const allEvents = eventsList.length;
  const upcoming = eventsList.filter(
    (e: EventTimeLeft) => e.status === "upcoming"
  ).length;
  const live = eventsList.filter((e) => e.status === "live").length;
  const past = eventsList.filter((e) => e.status === "past").length;
  const search = await searchParams;

  const filter = search.filter ?? "";
  const sort = search.sort ?? "date";
  const order = search.order ?? "asc";
  const page = Number(search.page ?? 1);
  const PAGE_SIZE = 5;
  //we filter firts
  const filteredEvents = filter
    ? eventsList.filter((e) => e.status === filter)
    : eventsList;
  //then sorting events
  const sortedEvents = [...filteredEvents].sort(
    (a: EventTimeLeft, b: EventTimeLeft) => {
      const aValue = a[sort];
      const bValue = b[sort];
      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    }
  );
  // and paginated using result

  const paginatedEvents = sortedEvents.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );
  return (
    <div>
      <div className="p-6 space-y-6">
        <h1> Statistics </h1>

        <div className="flex gap-4">
          <div>Total Events : {allEvents}</div>
          <div>Live Events : {live}</div>
          <div>Past Evnts : {past}</div>
          <div>Upcoming Events: {upcoming}</div>
        </div>

        <h1 className="text-xl font-bold">Events List Table </h1>
        <div className="flex gap-4 mb-4">
          <Filter defaultFilter={filter} />
          <Sort defaultSort={sort} defaultOrder={order} />
        </div>
        <EventsTable allEvents={paginatedEvents} />
      </div>
      <Pagination totalEvents={filteredEvents.length} page={page} />
    </div>
  );
}
