/**
 * @module api/fetchShow
 * API helper responsible for fetching a single, fully-detailed podcast show
 * (including its embedded seasons and episodes) from the remote API.
 */

/**
 * @function fetchShow
 * Asynchronously fetches a single show's full details (including seasons and
 * episodes) from the remote API, based on its unique ID, and updates state
 * accordingly via the provided setter functions.
 *
 * @param {string|number} id - The unique ID of the show to fetch (from the route parameter).
 * @param {Function} setShow - State setter function to update the fetched show object.
 * @param {Function} setError - State setter function to update the error message (string|null).
 * @param {Function} setLoading - State setter function to toggle the loading state (boolean).
 *
 * @returns {Promise<void>} A promise that resolves once the fetch process completes.
 */
export async function fetchShow(id, setShow, setError, setLoading) {
  try {
    setLoading(true);
    setError(null);

    const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);

    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    const data = await res.json();
    setShow(data);
  } catch (err) {
    console.error(`Failed to fetch show ${id}:`, err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
}
