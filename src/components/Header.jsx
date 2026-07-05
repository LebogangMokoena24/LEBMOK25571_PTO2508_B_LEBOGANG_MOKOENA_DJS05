import { Link } from "react-router-dom";
import styles from "./Header.module.css";

/**
 * Header Component
 *
 * Persistent app header shown on every page (Home and ShowDetail alike),
 * since it's rendered outside of `<Routes>` in App.jsx. The title doubles
 * as a link back to the homepage.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function Header() {
  return (
    <header className={styles.appHeader}>
      <Link to="/" className={styles.brand}>
        <h1>🎙️ Podcast App</h1>
      </Link>
    </header>
  );
}
