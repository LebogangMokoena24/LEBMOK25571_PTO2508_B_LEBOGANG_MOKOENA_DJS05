import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import GenreTags from "./GenreTags";
import styles from "./PodcastCard.module.css";

/**
 * Renders a single podcast preview card with image, title, number of seasons,
 * genres (as styled tags), and the last updated date. The entire card is a
 * <Link> to that show's dynamic detail route (/show/:id), so clicking it
 * navigates the user to the ShowDetail page for that specific podcast.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.podcast - The podcast data object to display.
 * @param {string|number} props.podcast.id - Unique ID of the podcast.
 * @param {string} props.podcast.title - Title of the podcast.
 * @param {string} props.podcast.image - URL of the podcast image.
 * @param {number} props.podcast.seasons - Number of seasons available.
 * @param {string} props.podcast.updated - ISO date string for the last update.
 * @param {number[]} props.podcast.genres - Genre ID numbers for this podcast.
 * @param {Array<Object>} props.genres - Array of genre objects for mapping IDs to titles.
 *
 * @returns {JSX.Element} The rendered podcast card component.
 */
export default function PodcastCard({ podcast, genres }) {
  return (
    <Link to={`/show/${podcast.id}`} className={styles.card}>
      <img src={podcast.image} alt={podcast.title} />

      <h3>{podcast.title}</h3>
      <p className={styles.seasons}>{podcast.seasons} seasons</p>
      <GenreTags genreIds={podcast.genres} genres={genres} />
      <p className={styles.updatedText}>
        Updated {formatDate(podcast.updated)}
      </p>
    </Link>
  );
}
