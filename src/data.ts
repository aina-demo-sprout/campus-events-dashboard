import type { CampusEvent } from "./types";

// Sample data (fictional events)
export const events: CampusEvent[] = [
  { id: "e1", name: "Intro to Git", type: "workshop", date: "2025-03-04", capacity: 40, signups: 38 },
  { id: "e2", name: "FastAPI in 90 minutes", type: "workshop", date: "2025-03-18", capacity: 35, signups: 29 },
  { id: "e3", name: "Careers in Fintech", type: "talk", date: "2025-04-02", capacity: 120, signups: 74 },
  { id: "e4", name: "Hack the Campus 24h", type: "hackathon", date: "2025-05-10", capacity: 120, signups: 120 },
  { id: "e5", name: "ML with scikit-learn", type: "workshop", date: "2025-09-15", capacity: 40, signups: 33 },
  { id: "e6", name: "Remote Work in ASEAN Startups", type: "talk", date: "2025-10-07", capacity: 100, signups: 61 },
];
