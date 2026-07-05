import styles from "./EpisodeCard.module.css";

/**
 * Shortens a block of text to a maximum length, cutting on a word boundary
 * and appending an ellipsis, so long episode descriptions don't overwhelm
 * the season episode list.
 *
 * @param {string} text - The full text to shorten.
 * @param {number} [maxLength=120] - Maximum number of characters to keep.
 * @returns {string} The shortened text.
 */
function shortenText(text, maxLength = 120) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  const trimmed = text.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(" ");
  return `${trimmed.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}

/**
 * EpisodeCard Component
 *
 * Displays a single episode within a season's episode list: its number,
 * title, a small thumbnail (the parent season's image), and a shortened
 * version of its description so the list stays easy to scan.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.episode - The episode data object.
 * @param {number} props.episode.episode - The episode's number within its season.
 * @param {string} props.episode.title - The episode's title.
 * @param {string} props.episode.description - The episode's full description.
 * @param {string} props.seasonImage - The image of the season this episode belongs to.
 * @returns {JSX.Element}
 */
export default function EpisodeCard({ episode, seasonImage }) {
  return (
    <li className={styles.episode}>
      <img
        src={seasonImage}
        alt=""
        className={styles.thumbnail}
        aria-hidden="true"
      />
      <div className={styles.details}>
        <p className={styles.episodeTitle}>
          <span className={styles.episodeNumber}>
            Episode {episode.episode}:
          </span>{" "}
          {episode.title}
        </p>
        <p className={styles.episodeDescription}>
          {shortenText(episode.description)}
        </p>
      </div>
    </li>
  );
}
