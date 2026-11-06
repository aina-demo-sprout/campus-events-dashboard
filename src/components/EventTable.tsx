import type { CampusEvent } from "../types";

const ALMOST_FULL = 0.8;

export function EventTable({ events }: { events: CampusEvent[] }) {
  return (
    <table className="card">
      <thead>
        <tr>
          <th>Event</th>
          <th>Date</th>
          <th>Sign-ups</th>
        </tr>
      </thead>
      <tbody>
        {events.map((e) => {
          const ratio = e.signups / e.capacity;
          return (
            <tr key={e.id}>
              <td>
                {e.name} {ratio >= ALMOST_FULL && <span className="badge">{ratio >= 1 ? "Full" : "Almost full"}</span>}
              </td>
              <td>{new Date(e.date).toLocaleDateString("en-MY")}</td>
              <td>
                {e.signups} / {e.capacity}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
