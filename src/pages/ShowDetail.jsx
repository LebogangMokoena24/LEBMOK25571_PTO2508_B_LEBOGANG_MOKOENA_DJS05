import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchShow } from "../api/fetchShow";
import { formatDate } from "../utils/formatDate";
import { genres as allGenres } from "../data";
import GenreTags from "../components/GenreTags";
import SeasonNavigation from "../components/SeasonNavigation";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import styles from "./ShowDetail.module.css";

/**
 * ShowDetail Page
 *
 * Dynamic route page rendered at `/show/:id`. Reads the show ID from the
 * URL via `useParams`, fetches that show's full details (including all of
 * its embedded seasons and episodes), and displays it: title, large cover
 * image, description, genre tags, last-updated date, and a season
 * navigation UI for browsing episodes.
 *
 * Loading, error, and "show not found" (empty) states are all handled
 * gracefully so the user is never left looking at a blank or broken page.
 *
 * A "Back to podcasts" link returns the user to the homepage. Because the
 * homepage's search/filter/sort/pagination state lives in `PodcastContext`
 * above the router (see App.jsx), that state is preserved automatically —
 * no extra work is needed here.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function ShowDetail() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchShow(id, setShow, setError, setLoading);
  }, [id]);

  return (
    <main className={styles.main}>
      <Link to="/" className={styles.backLink}>
        ← Back to podcasts
      </Link>

      {loading && <Loading message="Loading podcast..." />}

      {!loading && error && (
        <ErrorMessage
          message={`Error occurred while fetching podcast: ${error}`}
        />
      )}

      {!loading && !error && !show && (
        <ErrorMessage message="We couldn't find that show. It may have been removed." />
      )}

      {!loading && !error && show && (
        <>
          <section className={styles.header}>
            <img
              src={show.image}
              alt={show.title}
              className={styles.coverImage}
            />

            <div className={styles.info}>
              <h1 className={styles.title}>{show.title}</h1>
              <p className={styles.description}>{show.description}</p>

              <div className={styles.metaGrid}>
                <div>
                  <p className={styles.metaLabel}>Genres</p>
                  <GenreTags genreIds={show.genres} genres={allGenres} />
                </div>

                <div>
                  <p className={styles.metaLabel}>Last Updated</p>
                  <p className={styles.metaValue}>{formatDate(show.updated)}</p>
                </div>

                <div>
                  <p className={styles.metaLabel}>Total Seasons</p>
                  <p className={styles.metaValue}>
                    {show.seasons?.length ?? 0} Seasons
                  </p>
                </div>

                <div>
                  <p className={styles.metaLabel}>Total Episodes</p>
                  <p className={styles.metaValue}>
                    {show.seasons?.reduce(
                      (total, season) => total + (season.episodes?.length ?? 0),
                      0
                    )}{" "}
                    Episodes
                  </p>
                </div>
              </div>
            </div>
          </section>

          <SeasonNavigation seasons={show.seasons} />
        </>
      )}
    </main>
  );
}
