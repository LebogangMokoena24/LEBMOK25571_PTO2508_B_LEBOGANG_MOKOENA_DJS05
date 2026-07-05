import styles from "./Loading.module.css";

/**
 * Loading Component
 *
 * Reusable loading indicator used by both the Home page (while fetching the
 * podcast preview list) and the ShowDetail page (while fetching a single
 * show's full details). Displays a spinner alongside a short message so the
 * user is never left looking at a blank page.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.message="Loading..."] - The text shown beneath the spinner.
 * @returns {JSX.Element}
 */
export default function Loading({ message = "Loading..." }) {
  return (
    <div className={styles.messageContainer} role="status" aria-live="polite">
      <div className={styles.spinner}></div>
      <p>{message}</p>
    </div>
  );
}
