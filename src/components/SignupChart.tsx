import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import type { CampusEvent } from "../types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function SignupChart({ events }: { events: CampusEvent[] }) {
  const data = {
    labels: events.map((e) => e.name),
    datasets: [
      { label: "Sign-ups", data: events.map((e) => e.signups), backgroundColor: "#16a34a" },
      { label: "Capacity", data: events.map((e) => e.capacity), backgroundColor: "#d1d5db" },
    ],
  };
  return (
    <div className="card">
      <Bar data={data} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
    </div>
  );
}
