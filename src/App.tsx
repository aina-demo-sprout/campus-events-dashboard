import { useMemo, useState } from "react";
import { events } from "./data";
import type { EventType } from "./types";
import { SignupChart } from "./components/SignupChart";
import { EventTable } from "./components/EventTable";

const FILTERS: (EventType | "all")[] = ["all", "workshop", "talk", "hackathon"];

export default function App() {
  const [filter, setFilter] = useState<EventType | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? events : events.filter((e) => e.type === filter)),
    [filter],
  );
  const totalSignups = visible.reduce((sum, e) => sum + e.signups, 0);

  return (
    <main className="container">
      <h1>Campus Events Dashboard</h1>
      <p className="muted">
        {visible.length} events · {totalSignups} sign-ups
      </p>

      <div className="filters">
        {FILTERS.map((f) => (
          <button key={f} className={f === filter ? "active" : ""} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <SignupChart events={visible} />
      <EventTable events={visible} />
    </main>
  );
}
