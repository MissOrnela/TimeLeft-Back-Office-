type Country = {
  id: string;
  name: string;
};

type City = {
  id: number;
  name: string;
  country: Country;
};
type Zone = {
  id: number;
  name: string;
  city: City;
};

export type EventTimeLeft = {
  id: string;
  type: string;
  date: string;
  zone: Zone;
  booked: number;
  capacity: number;
  status: EventStatus;
};
enum EventStatus {
  Upcoming = "upcoming",
  Live = "live",
  Past = "past",
}
