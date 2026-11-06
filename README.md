# campus-events-dashboard

A **React + TypeScript** dashboard that shows sign-ups for faculty events, built with Vite and Chart.js.
Our computing society used it to see which workshops were filling up during the 2025 semester.

> Demo project for a fictional student persona (Sprout, Festival Idea Putrajaya 2026).

## Features
- Bar chart of sign-ups vs capacity per event
- Filter by event type (workshop, talk, hackathon)
- "Almost full" badge when an event passes 80% capacity
- Fully typed data model (`src/types.ts`)

## Run it

```bash
npm install
npm run dev
```

## Tech
React 18 · TypeScript · Vite · Chart.js (react-chartjs-2)

## Team
Built by a 4-person team in the computing society; I led the frontend and the chart components.
