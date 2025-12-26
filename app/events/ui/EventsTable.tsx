"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { EventTimeLeft } from "@/lib/type";

export default function EventsTable({
  allEvents,
}: {
  allEvents: EventTimeLeft[];
}) {
  const [selectedEvent, setSelectedEvent] = useState<EventTimeLeft | null>(
    null
  );
  // try to optimize perfomance by using usememo
  const displayedEvents = useMemo(() => allEvents, [allEvents]);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Zone </TableHead>
            <TableHead>City </TableHead>
            <TableHead>Country </TableHead>
            <TableHead>Booked</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {displayedEvents.map((event) => (
            <TableRow
              key={event.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedEvent(event)}
            >
              <TableCell>{event.type}</TableCell>
              <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
              <TableCell>{event.zone.name}</TableCell>
              <TableCell>{event.zone.city.name}</TableCell>
              <TableCell>{event.zone.city.country.name}</TableCell>
              <TableCell>{event.booked}</TableCell>
              <TableCell>{event.capacity}</TableCell>
              <TableCell>{event.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedEvent && (
        <Dialog
          open={!!selectedEvent}
          onOpenChange={() => setSelectedEvent(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedEvent.type} details</DialogTitle>
            </DialogHeader>
            <div className="space-10">
              <p>Type: {selectedEvent.type}</p>
              <p>Date: {new Date(selectedEvent.date).toLocaleDateString()}</p>
              <p>Zone: {selectedEvent.zone.name}</p>
              <p>City: {selectedEvent.zone.city.name}</p>
              <p>Country: {selectedEvent.zone.city.country.name}</p>
              <p>Booked: {selectedEvent.booked}</p>
              <p>Capacity : {selectedEvent.capacity}</p>
              <p>Zone: {selectedEvent.zone.name}</p>
              <p>Status: {selectedEvent.status}</p>
            </div>
            <DialogClose className="mt-4 border px-2 py-1 rounded">
              Close
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
