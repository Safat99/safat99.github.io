export type RecentUpdateCategory =
  | "Research"
  | "Publication"
  | "Presentation"
  | "Scholarship"
  | "Project"
  | "Teaching"
  | "Professional";

export type RecentUpdate = {
  id: string;
  /** ISO date (`YYYY-MM-DD`) or year precision (`YYYY`) when a day is not documented. */
  date: string;
  dateDisplayLabel?: string;
  category: RecentUpdateCategory;
  title: string;
  summary: string;
  sourceLabel?: string;
  sourceUrl?: string;
  secondaryLinks?: { label: string; url: string }[];
  featured?: boolean;
};

export const RECENT_UPDATES_LIMIT = 3;

export const recentUpdates: RecentUpdate[] = [
  {
    id: "20261118-whispers-presentation",
    date: "2026-11-18",
    category: "Presentation",
    title: "Presented at IEEE WHISPERS 2026",
    summary: "I presented our accepted paper on band selection for hyperspectral image classification under label scarcity in the conference’s Machine- and Deep Learning I session in Glasgow.",
    sourceLabel: "Paper",
    sourceUrl: "https://ieee-whispers.com/program/papers/WHISPERS_2026_paper__117.pdf",
    secondaryLinks: [
      { label: "Presentation Video", url: "https://www.youtube.com/watch?v=6daVOa4B1C4" },
      { label: "Program", url: "https://ieee-whispers.com/program/" },
      { label: "Conference", url: "https://www.grss-ieee.org/event/2026-16th-workshop-on-hyperspectral-imaging-and-signal-processing-evolution-in-remote-sensing-whispers/" },
      { label: "Slides", url: "assets/media/research/hyperspectral/whispers-2026-presentation.pdf" }
    ],
    featured: true
  },
  {
    id: "2026-emec-361-teaching",
    date: "2026",
    dateDisplayLabel: "Fall 2026",
    category: "Teaching",
    title: "Teaching in Measurement & Instrument Lab",
    summary: "I am supporting EMEC 361 laboratory instruction, instrumentation, and student learning during the Fall 2026 appointment.",
    sourceLabel: "Course Catalog",
    sourceUrl: "https://catalog.montana.edu/coursedescriptions/emec/"
  },
  {
    id: "2026-crawford-scholarship",
    date: "2026",
    dateDisplayLabel: "2026",
    category: "Scholarship",
    title: "Two-time Crawford Wildlife Habitat Scholarship recipient",
    summary: "The 2026 award recognizes my research focus on hyperspectral imaging and machine learning for wildlife habitat mapping. The linked Alumni Foundation article documents the 2025 inaugural cohort and does not independently verify the 2026 award.",
    sourceLabel: "2025 Cohort Article",
    sourceUrl: "https://www.msuaf.org/s/1584/m26/1col.aspx?sid=1584&gid=1&pgid=7156&cid=13495&ecid=13495&crid=0&calpgid=61&calcid=6670"
  }
];

function sortTimestamp(date: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return Date.parse(`${date}T00:00:00.000Z`);
  if (/^\d{4}$/.test(date)) return Date.parse(`${date}-01-01T00:00:00.000Z`);
  return Number.NEGATIVE_INFINITY;
}

export function getVisibleRecentUpdates(limit = RECENT_UPDATES_LIMIT) {
  const visibleLimit = Math.max(0, Math.min(5, Math.floor(limit)));
  return recentUpdates
    .map((update, index) => ({ update, index }))
    .sort((a, b) => sortTimestamp(b.update.date) - sortTimestamp(a.update.date) || a.index - b.index)
    .slice(0, visibleLimit)
    .map(({ update }) => update);
}
