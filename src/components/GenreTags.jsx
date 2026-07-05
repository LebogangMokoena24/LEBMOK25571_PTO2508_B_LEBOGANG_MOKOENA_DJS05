import styles from "./GenreTags.module.css";

/**
 * GenreTags Component
 *
 * Reusable component that maps an array of genre IDs to their human-readable
 * titles (using the static genre list from data.js) and renders them as
 * small pill-shaped tags. Used on both the PodcastCard (homepage grid) and
 * the ShowDetail page, keeping genre-tag styling and logic in one place.
 *
 * @component
 * @param {Object} props
 * @param {number[]} props.genreIds - Array of genre ID numbers belonging to a show.
 * @param {{id:number,title:string}[]} props.genres - Full list of genre definitions.
 * @returns {JSX.Element}
 */
export default function GenreTags({ genreIds = [], genres = [] }) {
  return (
    <div className={styles.tags}>
      {genreIds.map((id) => {
        const match = genres.find((g) => g.id === id);
        return (
          <span key={id} className={styles.tag}>
            {match ? match.title : `Unknown (${id})`}
          </span>
        );
      })}
    </div>
  );
}
