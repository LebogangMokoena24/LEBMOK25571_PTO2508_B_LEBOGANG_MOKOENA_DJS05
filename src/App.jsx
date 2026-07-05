import { Routes, Route } from "react-router-dom";
import { PodcastProvider } from "./context/PodcastContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";

/**
 * Root component of the Podcast Explorer app.
 *
 * - Renders the `Header`, which is displayed on every page.
 * - Wraps the app's routes in `PodcastProvider`, so podcast data and the
 *   user's search/filter/sort/pagination state are available across pages
 *   and preserved when navigating between them.
 * - Defines the app's two client-side routes using React Router:
 *   - "/" renders the `Home` page (podcast listing, search, filters).
 *   - "/show/:id" renders the `ShowDetail` page for a specific podcast.
 *
 * @returns {JSX.Element} The application component with routing and context.
 */
export default function App() {
  return (
    <>
      <Header />
      <PodcastProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </PodcastProvider>
    </>
  );
}
