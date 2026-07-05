import { createContext } from "react";

/**
 * React context for sharing podcast state across the entire app, including
 * both the Home listing page and the ShowDetail page.
 *
 * Kept in its own plain-JS module (separate from the `PodcastProvider`
 * component in PodcastContext.jsx) so that React Fast Refresh can reliably
 * hot-reload component files without losing state.
 *
 * Must be used within a <PodcastProvider>.
 */
export const PodcastContext = createContext();
