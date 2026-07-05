import styles from "./ErrorMessage.module.css";

/**
 * ErrorMessage Component
 *
 * Reusable, user-friendly error banner used whenever an API request fails —
 * on the Home page (fetching all podcasts) or the ShowDetail page (fetching
 * a single show). Keeps error styling and messaging consistent app-wide.
 *
 * @component
 * @param {Object} props
 * @param {string} props.message - The error message to display to the user.
 * @returns {JSX.Element}
 */
export default function ErrorMessage({ message }) {
  return (
    <div className={styles.messageContainer} role="alert">
      <div className={styles.error}>
        <strong>Something went wrong.</strong>
        <p>{message}</p>
      </div>
    </div>
  );
}
