import { useContext } from "react";
import { PodcastContext } from "../context/podcastContext";
import { genres } from "../data";
import SearchBar from "../components/SearchBar";
import SortSelect from "../components/SortSelect";
import GenreFilter from "../components/GenreFilter";
import PodcastGrid from "../components/PodcastGrid";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import styles from "./Home.module.css";

/**
 * Home Page
 *
 * The main podcast listing/homepage. Renders search, genre-filter, and sort
 * controls, followed by a paginated grid of podcast preview cards.
 *
 * All podcast data, along with the current search term, genre filter, sort
 * order, and page number, live in `PodcastContext` — which is provided
 * above the router in App.jsx. Because of this, navigating away to a show's
 * ShowDetail page and back to Home preserves all of these values exactly as
 * the user left them.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function Home() {
  const { loading, error } = useContext(PodcastContext);

  return (
    <main className={styles.main}>
      <section className={styles.controls}>
        <SearchBar />
        <GenreFilter genres={genres} />
        <SortSelect />
      </section>

      {loading && <Loading message="Loading podcasts..." />}

      {!loading && error && (
        <ErrorMessage message={`Error occurred while fetching podcasts: ${error}`} />
      )}

      {!loading && !error && (
        <>
          <PodcastGrid genres={genres} />
          <Pagination />
        </>
      )}
    </main>
  );
}
