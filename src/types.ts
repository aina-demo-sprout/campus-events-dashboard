export type EventType = "workshop" | "talk" | "hackathon";

export interface CampusEvent {
  id: string;
  name: string;
  type: EventType;
  date: string; // ISO date
  capacity: number;
  signups: number;
}
