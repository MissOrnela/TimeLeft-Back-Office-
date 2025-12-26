"use server";

import { EventTimeLeft } from "@/lib/type";

export async function getAllEvents(): Promise<EventTimeLeft[]> {
  try {
    const data = await fetch(
      "https://cdn.timeleft.com/frontend-tech-test/events.json"
    );
    if (data.ok) {
      const result = await data.json();
      return result;
    } else {
      throw new Error("error when fecthing data");
    }
  } catch (error) {
    console.log("error when fetching events data ", error);
    return [];
  }
}
